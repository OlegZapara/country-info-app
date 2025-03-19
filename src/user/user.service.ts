import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async getUserById(userId: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User with this Id does not exist');
    }

    return user;
  }

  async createUser(user: CreateUserDto) {
    const passwordHash = await this.hashData(user.password);
    return this.prismaService.user.create({
      data: {
        name: user.name,
        passwordHash,
      },
    });
  }

  async deleteUser(userId: string) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new NotFoundException('User with this Id does not exist');
    }

    return this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });
  }

  private hashData(data: string) {
    return bcrypt.hash(data, 10);
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-user-dto';
import { UserIdDto } from './dto/user-id.dto';
import { CreateHolidayDto } from './holiday/dto/create-holiday.dto';
import { ReadHolidayDto } from './holiday/dto/read-holiday.dto';
import { HolidayService } from './holiday/holiday.service';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly holidayService: HolidayService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all users',
    type: [ReadUserDto],
  })
  async getUsers() {
    const users = this.userService.getUsers();
    return plainToInstance(ReadUserDto, users);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User details', type: ReadUserDto })
  async getUserById(@Param() userIdDto: UserIdDto) {
    const user = this.userService.getUserById(userIdDto.id);
    return plainToInstance(ReadUserDto, user);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'User deleted successfully' })
  async deleteUser(@Param() userIdDto: UserIdDto) {
    return this.userService.deleteUser(userIdDto.id);
  }

  @Get(':id/holidays')
  @ApiResponse({
    status: 200,
    description: 'List of all holidays for a user',
    type: [ReadHolidayDto],
  })
  async getUserHolidays(@Param() userIdDto: UserIdDto) {
    const holidays = this.holidayService.getUserHolidays(userIdDto.id);
    return plainToInstance(ReadHolidayDto, holidays);
  }

  @Post(':id/holidays')
  @ApiResponse({ status: 201, description: 'Holiday created successfully' })
  async createHoliday(
    @Param() userIdDto: UserIdDto,
    @Body() createHolidayDto: CreateHolidayDto,
  ) {
    return this.holidayService.createHoliday(userIdDto.id, createHolidayDto);
  }
}

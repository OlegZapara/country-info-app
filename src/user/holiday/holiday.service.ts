import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { HolidayDto } from './dto-external/holiday.dto';
import { CreateHolidayDto } from './dto/create-holiday.dto';

@Injectable()
export class HolidayService {
  private readonly nagerApi;

  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {
    this.nagerApi = this.configService.get<string>('NAGER_API');
  }

  async getUserHolidays(userId: string) {
    return this.prismaService.holiday.findMany({
      where: {
        userId,
      },
    });
  }

  async createHoliday(userId: string, createHolidayDto: CreateHolidayDto) {
    const holidayResponse = await axios.get<HolidayDto[]>(
      `${this.nagerApi}/PublicHolidays/${createHolidayDto.year}/${createHolidayDto.countryCode}`,
    );
    const filteredHolidays = holidayResponse.data.filter((holiday) =>
      createHolidayDto.holidays.includes(holiday.name),
    );

    await this.prismaService.holiday.createMany({
      data: filteredHolidays.map((holiday) => ({
        userId,
        ...holiday,
        date: new Date(holiday.date),
        counties: holiday.counties ?? [],
        types: holiday.types ?? [],
      })),
    });
  }
}

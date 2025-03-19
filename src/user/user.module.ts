import { Module } from '@nestjs/common';
import { HolidayService } from './holiday/holiday.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, HolidayService],
})
export class UserModule {}

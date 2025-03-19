import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateHolidayDto {
  @ApiProperty({ description: 'The country code in ISO format', example: 'US' })
  @IsString()
  countryCode: string;

  @ApiProperty({ description: 'The year for the holidays', example: 2023 })
  @IsInt()
  year: number;

  @ApiProperty({
    description: 'List of holiday names',
    example: ["New Year's Day", 'Christmas Day'],
  })
  @IsString({ each: true })
  holidays: string[];
}

import { ApiProperty } from '@nestjs/swagger';

export class ReadHolidayDto {
  @ApiProperty({
    description: 'Unique identifier for the holiday',
    example: 'ckv1u9z1f0001qk9z1u9z1f00',
  })
  id: string;

  @ApiProperty({ description: 'Name of the holiday', example: 'Christmas' })
  name: string;

  @ApiProperty({ description: 'Local name of the holiday', example: 'Navidad' })
  localName: string;

  @ApiProperty({
    description: 'Country code where the holiday is observed',
    example: 'US',
  })
  countryCode: string;

  @ApiProperty({ description: 'Date of the holiday', example: '2023-12-25' })
  date: Date;

  @ApiProperty({
    description: 'Indicates if the holiday is fixed',
    example: true,
  })
  fixed: boolean;

  @ApiProperty({
    description: 'Indicates if the holiday is global',
    example: false,
  })
  global: boolean;

  @ApiProperty({
    description: 'Counties where the holiday is observed',
    example: ['California', 'Texas'],
  })
  counties: string[];

  @ApiProperty({
    description: 'Year the holiday was launched (optional)',
    example: 2020,
    nullable: true,
  })
  launchYear?: number;

  @ApiProperty({
    description: 'Types of the holiday',
    example: ['Public', 'Religious'],
  })
  types: string[];
}

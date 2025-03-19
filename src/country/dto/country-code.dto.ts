import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';

export class CountryCodeDto {
  @ApiProperty({ description: 'Country code', example: 'UA' })
  @Matches(/^[A-Z]{2}$/, {
    message: 'Code must consist of two uppercase English letters',
  })
  code: string;
}

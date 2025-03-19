import { ApiProperty } from '@nestjs/swagger';

export class ShortCountryDto {
  @ApiProperty({
    description: 'The country code (e.g., ISO 3166-1 alpha-3 code)',
    example: 'UA',
  })
  countryCode: string;

  @ApiProperty({
    description: 'The common name of the country',
    example: 'Ukraine',
  })
  name: string;
}

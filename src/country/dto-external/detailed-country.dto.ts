import { ApiProperty } from '@nestjs/swagger';

export class DetailedCountryDto {
  @ApiProperty({
    description: 'The common name of the country',
    example: 'Ukraine',
  })
  commonName: string;

  @ApiProperty({
    description: 'The official name of the country',
    example: 'Ukraine',
  })
  officialName: string;

  @ApiProperty({
    description: 'The country code (e.g., ISO 3166-1 alpha-3 code)',
    example: 'UA',
  })
  countryCode: string;

  @ApiProperty({
    description: 'The region the country belongs to',
    example: 'Europe',
  })
  region: string;

  @ApiProperty({
    description: 'List of bordering countries with detailed information',
    type: [DetailedCountryDto],
  })
  borders: DetailedCountryDto[];
}

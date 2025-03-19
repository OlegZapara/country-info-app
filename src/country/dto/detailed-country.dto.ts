import { ApiProperty } from '@nestjs/swagger';
import { PopulationCountDto } from '../dto-external/country-population.dto';
import { DetailedCountryDto } from '../dto-external/detailed-country.dto';

export class CountryDto {
  @ApiProperty({
    description: 'The common name of the country',
    example: 'United States',
  })
  commonName: string;

  @ApiProperty({
    description: 'The official name of the country',
    example: 'United States of America',
  })
  officialName: string;

  @ApiProperty({
    description: 'The country code (e.g., ISO 3166-1 alpha-3 code)',
    example: 'USA',
  })
  countryCode: string;

  @ApiProperty({
    description: 'The region the country belongs to',
    example: 'Americas',
  })
  region: string;

  @ApiProperty({
    description: 'List of bordering countries with detailed information',
    type: [DetailedCountryDto],
  })
  borders: DetailedCountryDto[];

  @ApiProperty({
    description: 'Flag of the country (URL to image)',
    example: 'https://example.com/flags/us.png',
  })
  flag: string;

  @ApiProperty({
    description: 'Population statistics for the country',
    type: [PopulationCountDto],
    example: [{ year: 2020, value: 331002651 }],
  })
  population: { year: number; value: number }[];
}

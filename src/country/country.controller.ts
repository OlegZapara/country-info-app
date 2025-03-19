import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { ShortCountryDto } from './dto-external/country.dto';
import { CountryCodeDto } from './dto/country-code.dto';
import { CountryDto } from './dto/detailed-country.dto';

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('all')
  @ApiResponse({
    status: 200,
    description: 'Get all countries',
    type: [ShortCountryDto],
  })
  async getAllCountries() {
    const countries = await this.countryService.getCountries();

    return countries;
  }

  @Get(':code')
  @ApiResponse({
    status: 200,
    description: 'Get country by code',
    type: CountryDto,
  })
  async getCountryById(@Param() codeDto: CountryCodeDto) {
    const country = await this.countryService.getCountryByCode(codeDto.code);

    return country;
  }
}

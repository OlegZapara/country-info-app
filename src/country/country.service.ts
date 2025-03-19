import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ShortCountryDto } from './dto-external/country.dto';
import { DetailedCountryDto } from './dto-external/detailed-country.dto';
import { CountryPopulationDto } from './dto-external/country-population.dto';
import { CountryFlagDto } from './dto-external/country-flag.dto';

@Injectable()
export class CountryService {
  private readonly nagerApi;
  private readonly countriesNowApi;

  constructor(private readonly config: ConfigService) {
    this.nagerApi = this.config.get<string>('NAGER_API');
    this.countriesNowApi = this.config.get<string>('COUNTRIES_NOW_API');
  }

  async getCountries(): Promise<ShortCountryDto[]> {
    const countries = await axios.get<ShortCountryDto[]>(
      `${this.nagerApi}/AvailableCountries`,
    );

    return countries.data;
  }

  async getCountryByCode(code: string) {
    const [countryInfoResponse, countryPopulationResponse, imagesResponse] =
      await Promise.all([
        axios.get<DetailedCountryDto>(`${this.nagerApi}/CountryInfo/${code}`),
        axios.get<CountryPopulationDto>(
          `${this.countriesNowApi}/countries/population`,
        ),
        axios.get<CountryFlagDto>(
          `${this.countriesNowApi}/countries/flag/images`,
        ),
      ]);

    const { flag, iso3 } = imagesResponse.data.data.find(
      (x) => x.iso2 === code,
    ) ?? { flag: null, iso3: null };

    const population = countryPopulationResponse.data.data.find(
      (x) => x.code === iso3,
    )?.populationCounts;

    return {
      ...countryInfoResponse.data,
      flag,
      population,
    };
  }
}

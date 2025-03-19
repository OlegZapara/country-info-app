export class CountryPopulationDto {
  error: boolean;
  msg: string;
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCountDto[];
  }[];
}

export class PopulationCountDto {
  year: number;
  value: number;
}

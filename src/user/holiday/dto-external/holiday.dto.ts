export class HolidayDto {
  name: string;
  localName: string;
  countryCode: string;
  date: Date;
  fixed: boolean;
  global: boolean;
  counties: string[];
  launchYear?: number;
  types: string[];
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountryController } from './country/country.controller';
import { ConfigModule } from '@nestjs/config';
import { CountryService } from './country/country.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, CountryController],
  providers: [CountryService],
})
export class AppModule {}

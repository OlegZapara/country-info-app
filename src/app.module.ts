import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { CountryController } from './country/country.controller';
import { CountryService } from './country/country.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, PrismaModule],
  controllers: [AppController, CountryController],
  providers: [CountryService],
})
export class AppModule {}

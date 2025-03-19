import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

export class UserIdDto {
  @ApiProperty({
    description: 'User ID in CUID format',
  })
  @IsString()
  id: string;
}

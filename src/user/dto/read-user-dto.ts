import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadUserDto {
  @Expose()
  @ApiProperty({ description: 'The unique identifier of the user' })
  id: string;

  @Expose()
  @ApiProperty({ description: 'The name of the user' })
  name: string;
}

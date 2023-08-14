import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    example: 'test@test.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'passwordpassword',
  })
  @MinLength(8)
  password: string;
}

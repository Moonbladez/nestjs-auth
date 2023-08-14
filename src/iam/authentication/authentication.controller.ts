import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { SignInDto, SignUpDto } from './dto';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Res({ passthrough: true }) response: Response,
    @Body() signInDto: SignInDto,
  ) {
    return this.authService.signIn(signInDto);
    // const accessToken = await this.authService.signIn(signInDto);
    // response.cookie('accessToken', accessToken, {
    //   httpOnly: true,
    //   sameSite: 'none',
    //   secure: true,
    // });
  }
}

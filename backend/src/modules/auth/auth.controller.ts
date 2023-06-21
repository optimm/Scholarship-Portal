import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';

import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { AuthService } from './auth.service';
import { MessageResDto } from 'src/common/dto/response.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthCallback(@Req() req, @Res() res): Promise<MessageResDto> {
    return { message: 'hello' };
    // return this.authService.loginUser(req.user, res);
  }
}

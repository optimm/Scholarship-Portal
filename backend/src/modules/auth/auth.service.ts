import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from '../user/dto/user.dto';
import { MessageResDto } from 'src/common/dto/response.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  async loginUser(user: UserDto | null, res: Response): Promise<MessageResDto> {
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const cookieOptions = {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: 'none' as const,
      secure: true,
    };
    res.cookie('token', 'hello', cookieOptions);
    return MessageResDto.default();
  }
  async registerUser() {
    console.log('hello');
  }
}

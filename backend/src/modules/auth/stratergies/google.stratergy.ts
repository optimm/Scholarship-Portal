import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { UserRoleEnum } from 'src/modules/user/enum/user-type.enum';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get<string>('google.clientID'),
      clientSecret: configService.get<string>('google.clientSecret'),
      callbackURL: configService.get<string>('google.callbackURL'),
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;
    const adminEmails = this.configService.get<string>('adminEmails');
    const isAdmin = adminEmails.includes(emails[0].value);

    const user: UserDto = {
      uid: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      picture: photos[0].value,
      role: isAdmin ? UserRoleEnum.ADMIN : UserRoleEnum.USER,
    };

    done(null, user);
  }
}

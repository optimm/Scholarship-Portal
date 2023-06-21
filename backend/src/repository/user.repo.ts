import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UserDto } from 'src/modules/user/dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  public static saveUser(user: UserDto) {
    console.log('hello');
  }

  public static findByEmail(email: string) {
    console.log('hello');
  }
}

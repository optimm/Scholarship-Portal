import { UserRoleEnum } from '../enum/user-type.enum';

export interface UserDto {
  uid: string;
  name: string;
  email: string;
  picture: string;
  role?: UserRoleEnum;
}

import { httpClient } from 'common/http-client/http-client';

export class AuthRepo {
  public static async login() {
    return await httpClient.get('/auth/google');
  }
}

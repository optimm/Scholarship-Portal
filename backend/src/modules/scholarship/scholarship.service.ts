import { Injectable } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class ScholarshipService {
  get() {
    return { msg: 'works' };
  }
}

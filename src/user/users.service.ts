import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return ['Sifat', 'Mukit', 'Asif'];
  }
}

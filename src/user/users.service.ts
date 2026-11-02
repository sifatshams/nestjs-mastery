import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(@Param('id') id: string) {
    return `Users id: ${id}`;
  }
}

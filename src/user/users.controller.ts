import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUsers(@Param('id') id: string) {
    return this.usersService.getUsers(id);
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(@Query() {}: any): Promise<User[]> {
    try {
      return this.userService.getAll();
    } catch (err) {
      throw err;
    }
  }
}

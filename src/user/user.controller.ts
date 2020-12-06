import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser, IUserDoc } from './user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<IUser[]> {
    try {
      return this.userService.getAll();
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async create(@Body() payload: IUser[]): Promise<IUserDoc[]> {
    try {
      return this.userService.create(payload);
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async delete(@Body() id: string): Promise<IUserDoc[]> {
    try {
      return this.userService.delete(id);
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async deleteAll(): Promise<IUserDoc[]> {
    try {
      return this.userService.deleteAll();
    } catch (err) {
      throw err;
    }
  }
}

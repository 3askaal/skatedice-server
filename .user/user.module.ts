import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TrickService } from 'src/trick/trick.service';

@Module({
  controllers: [UserController],
  providers: [UserService, TrickService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EssentialService } from 'src/essential/essential.service';
import { User, UserSchema } from './user.model';
import { Essential, EssentialSchema } from 'src/essential/essential.model';

@Module({
  controllers: [UserController],
  providers: [UserService, EssentialService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Essential.name, schema: EssentialSchema }]),
  ]
})
export class UserModule {}

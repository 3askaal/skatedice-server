import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User {
  _id: Types.ObjectId;
  @Prop() username: string;
  @Prop() email: string;
  @Prop() password: string;
  @Prop() mates: User[];
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

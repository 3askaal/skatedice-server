import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema()
export class Essential {
  _id: Types.ObjectId;
  @Prop() name: string;
  @Prop() difficulty: number;
  @Prop() rotation: string;
  @Prop() direction: string;
}

export type EssentialDocument = Essential & Document;

export const EssentialSchema = SchemaFactory.createForClass(Essential);

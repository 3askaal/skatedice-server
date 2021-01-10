import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Essential } from '../essential/essential.model'

@Schema()
export class Trick {
  _id: Types.ObjectId;
  @Prop() position: string;
  @Prop() essential: Essential;
  @Prop() rotation: number;
  @Prop() direction: string;
  @Prop() tags: string[];
  @Prop() difficulty: number;
  @Prop() twisted: boolean;
}

export type TrickDocument = Trick & Document;

export const TrickSchema = SchemaFactory.createForClass(Trick);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Trick } from 'src/trick/trick.model';

@Schema()
export class Match {
  _id: Types.ObjectId;
  @Prop() word: string;
  @Prop() players: User[];
  @Prop() turns: { player: User, trick: Trick, good: string[], fail: string[] };
  @Prop() current: User;
  @Prop() winner: User;
  @Prop() status: string;
  @Prop() tournament: Tournament;
}

export type MatchDocument = Match & Document;

export const MatchSchema = SchemaFactory.createForClass(Match);

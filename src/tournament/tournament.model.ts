import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Match } from 'src/match/match.model';

@Schema()
export class Tournament {
  _id: Types.ObjectId;
  @Prop() name: string;
  @Prop() word: string;
  @Prop() players: User[];
  @Prop() bracket: {
    round: number,
    match: Match,
    players: User[],
    winner: User,
  }[];
  @Prop() current: User;
  @Prop() winner: User;
  @Prop() status: string;
  @Prop() tournament: Tournament;
}

export type TournamentDocument = Tournament & Document;

export const TournamentSchema = SchemaFactory.createForClass(Tournament);

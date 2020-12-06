import { Document } from 'mongoose';
import { IMatchDoc } from 'src/match/match';
import { IUser } from 'src/user/user';

export interface ITournament {
  name: string;
  word: string;
  players: IUser[];
  matches: IMatchDoc[];
  winner: IUser
}

export interface ITournamentDoc extends ITournament, Document {}

import { Document } from 'mongoose';
import { ITournamentDoc } from 'src/tournament/tournament';
import { ITrickDoc } from 'src/trick/trick';
import { IUserDoc } from 'src/user/user';

export interface IMatch {
  word: string;
  players: {
    player: IUserDoc;
    letters: number;
  }
  turns: {
    player: IUserDoc;
    trick: ITrickDoc;
    good: IUserDoc[];
    fail: IUserDoc[];
  }[]
  current: IUserDoc;
  winner: IUserDoc;
  status: string;
  tournament: ITournamentDoc;
}

export interface IMatchDoc extends IMatch, Document {}

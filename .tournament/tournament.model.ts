import { Schema, model } from 'mongoose';
import { ITournamentDoc } from './tournament';

const TournamentSchema = new Schema({
  name: {
    type: String,
    default: 'Tournament',
  },
  word: {
    type: String,
    default: 'skate',
  },
  players: [{ type: String, ref: 'User' }],
  matches: [
    {
      match: { type: String, ref: 'Match' },
      players: [{ type: String, ref: 'User' }],
      winner: { type: String, ref: 'User' },
      round: Number,
      _id: false,
    },
  ],
  winner: { type: String, ref: 'User' },
});

export const TournamentModel = model<ITournamentDoc>(
  'Tournament',
  TournamentSchema,
);

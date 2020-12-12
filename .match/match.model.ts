import { Schema, model } from 'mongoose';
import { IMatchDoc } from './match';

const MatchSchema = new Schema({
  word: {
    type: String,
    default: 'skate',
  },
  players: [
    {
      player: { type: String, ref: 'User' },
      letters: { type: Number, default: 0 },
      // report: {
      //   position: Number,
      //   w: Number,
      //   l: Number,
      //   xp: Number,
      //   lostAtTurn: Number,
      //   lettersGiven: { type: Number, default: 0 },
      // },
      _id: false,
    },
  ],
  turns: [
    {
      player: { type: String, ref: 'User' },
      trick: { type: String, ref: 'Trick' },
      good: [{ type: String, ref: 'User' }],
      fail: [{ type: String, ref: 'User' }],
      _id: false,
    },
  ],
  current: { type: String, ref: 'User' },
  winner: { type: String, ref: 'User' },
  status: { type: String },
  tournament: { type: String, ref: 'Tournament' },
});

export const MatchModel = model<IMatchDoc>(
  'Match',
  MatchSchema,
);

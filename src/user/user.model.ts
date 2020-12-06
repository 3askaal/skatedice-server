import { Schema, model } from 'mongoose';
import { IUserDoc } from './user';

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true, select: false },
  password: { type: String, required: true, select: false },
  mates: [
    {
      mate: { type: String, ref: 'User' },
      status: Number,
      _id: false,
    },
  ],
  stats: {
    xp: { type: Number, default: 0 },
    w: { type: Number, default: 0 },
    l: { type: Number, default: 0 },
  },
});

export const UserModel = model<IUserDoc>(
  'User',
  UserSchema,
);

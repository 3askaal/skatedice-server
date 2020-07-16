import { Schema, model } from 'mongoose';
import { ITrickDoc } from './trick';

const TrickSchema = new Schema({
  position: { type: String, default: 'r' },
  essential: { type: String, ref: 'Essential' },
  rotation: Number,
  direction: String,
  tags: [{ type: String, ref: 'Tag' }],
  difficulty: Number,
  twisted: Boolean,
});

export const TrickModel = model<ITrickDoc>('Trick', TrickSchema);

import { Schema, model } from 'mongoose';
import { IEssentialDoc } from './essential';

const EssentialSchema = new Schema({
  name: { type: String, required: true },
  difficulty: { type: Number, required: true },
  rotation: { type: Number },
  direction: { type: String },
});

export const EssentialModel = model<IEssentialDoc>(
  'Essential',
  EssentialSchema,
);

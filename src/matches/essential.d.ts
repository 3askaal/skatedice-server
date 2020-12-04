import { Document } from 'mongoose';

export interface IEssential {
  name: string;
  difficulty: number;
  rotation?: number;
  direction?: string;
}

export interface IEssentialDoc extends IEssential, Document {}

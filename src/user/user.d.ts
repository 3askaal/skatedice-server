import { Document } from 'mongoose';

export interface IUser {
  name: string;
  difficulty: number;
  rotation?: number;
  direction?: string;
}

export interface IUserDoc extends IUser, Document {}

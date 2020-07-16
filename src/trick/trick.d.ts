import { Document } from 'mongoose';
import { IEssentialDoc } from 'src/essential/essential';

export interface ITrick {
  position: string;
  essential: string | IEssentialDoc;
  rotation?: number;
  direction?: string;
  difficulty?: number;
  tags?: string[];
  twisted?: boolean;
  aka?: { name: string; placement: string };
}

export interface ITrickDoc extends ITrick, Document {}

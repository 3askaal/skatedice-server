import { IEssential } from './essential';

export const ESSENTIALS: IEssential[] = [
  { name: 'ollie', difficulty: 1 },

  { name: 'pop shove-it', difficulty: 2, rotation: 180, direction: 'bs' },
  { name: 'front shove-it', difficulty: 2, rotation: 180, direction: 'fs' },

  { name: 'kickflip', difficulty: 3 },
  { name: 'heelflip', difficulty: 3 },

  { name: 'varial kickflip', difficulty: 4, rotation: 180, direction: 'bs' },
  { name: 'varial heelflip', difficulty: 4, rotation: 180, direction: 'fs' },

  { name: 'double kickflip', difficulty: 5 },
  { name: 'double heelflip', difficulty: 5 },

  { name: 'hardflip', difficulty: 6, rotation: 180, direction: 'fs' },
  { name: 'inward heelflip', difficulty: 6, rotation: 180, direction: 'bs' },

  { name: '360 pop shove-it', difficulty: 6, rotation: 360, direction: 'bs' },
  { name: '360 flip', difficulty: 6, rotation: 360, direction: 'bs' },
  { name: '360 front shove-it', difficulty: 7, rotation: 360, direction: 'fs' },
  { name: 'laser flip', difficulty: 7, rotation: 360, direction: 'fs' },

  { name: 'late kickflip', difficulty: 8 },
  { name: 'late heelfip', difficulty: 8 },
  { name: 'pressure flip', difficulty: 6 },

  { name: '360 hardflip', difficulty: 9, rotation: 360, direction: 'fs' },
  { name: '360 inward heelflip', difficulty: 9, rotation: 360, direction: 'bs' },

  { name: '540 flip', difficulty: 8, rotation: 540, direction: 'bs' },
  { name: '540 laser flip', difficulty: 9, rotation: 540, direction: 'fs' },

  { name: 'impossible', difficulty: 7, rotation: 360, direction: 'fs' },
  { name: 'front-foot impossible', difficulty: 8, rotation: 360, direction: 'fs' },
];

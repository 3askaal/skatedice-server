import { ITrick } from './trick';
import { IEssentialDoc, IEssential } from 'src/essential/essential';
import { POSITIONS, ROTATIONS, DIRECTIONS } from './trick.constants';
import { Trick } from './trick.model';

export function createTricksBasedOnEssential(essential: IEssentialDoc): void {
  POSITIONS.forEach(position => {
    ROTATIONS.forEach(async rotation => {
      if (rotation) {
        DIRECTIONS.forEach(async direction => {
          await Trick.create<ITrick>(createTrickDoc(essential, position, rotation, direction));
        });
      } else {
        await Trick.create<ITrick>(createTrickDoc(essential, position));
      }
    });
  });
}

function createTrickDoc(
  essential: IEssentialDoc,
  position: string,
  rotation?: number,
  direction?: string,
) {
  const twisted =
    direction !== undefined &&
    essential.direction !== undefined &&
    essential.direction !== direction;

  const difficulty: number = modifyDifficulty(essential, position, rotation);

  return {
    position,
    essential,
    rotation,
    direction,
    twisted,
    difficulty,
  };
}

function modifyDifficulty(essential: IEssential, position: string, rotation: number): number {
  let difficulty = essential.difficulty;

  if (position === 'n' || position === 's') {
    difficulty += 2;
  }

  if (rotation) {
    difficulty += (rotation / 180) * 2;
  }

  return difficulty;
}

export function formatTrick(trickDoc: ITrick): ITrick {
  const trick: any = {
    ...trickDoc,
    essential: {
      ...(trickDoc.essential as IEssential),
    },
  };

  // prevent 'Regular Kickflip'
  if (trick.position === 'r') {
    trick.position = null;
  }

  // prevent 'Nollie Ollie'
  if (trick.position === 'n' && trick.essential.name === 'ollie') {
    trick.essential.name = null;
  }

  // prevent 'BS 360 Ollie' or 'Switch FS 180 Ollie'
  if (trick.rotation && trick.essential.name === 'ollie') {
    trick.essential.name = null;
  }

  if (trick.position === 'f' && trick.direction === 'bs') {
    // prevent 'Fakie BS 180 Ollie', do 'Half Cab' instead
    if (trick.rotation === 180) {
      trick.aka = {
        name: 'half cab',
        placement: 'essential',
      };

      trick.position = null;
      trick.direction = null;
      trick.rotation = null;
    }

    // prevent 'Fakie BS 360 Ollie', do 'Full Cab' instead
    if (trick.rotation === 360) {
      trick.aka = {
        name: 'full cab',
        placement: 'essential',
      };

      trick.position = null;
      trick.direction = null;
      trick.rotation = null;
    }
  }

  // Bigspins and Bigspin flips
  if (trick.direction === trick.essential.direction) {
    if (trick.rotation === 180 && trick.essential.rotation === 180) {
      // Bigspins
      if (trick.essential.name === 'pop shove-it' || trick.essential.name === 'front shove-it') {
        trick.aka = {
          name: 'big spin',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.essential.name = null;
      }

      // Bigflips
      if (trick.essential.name === 'varial kickflip') {
        trick.aka = {
          name: 'bigflip',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big heels
      if (trick.essential.name === 'varial heelflip') {
        trick.aka = {
          name: 'big heel',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big hardflips
      if (trick.essential.name === 'hardflip') {
        trick.aka = {
          name: 'big hardflip',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big inward heels
      if (trick.essential.name === 'inward heelflip') {
        trick.aka = {
          name: 'big inward heel',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }
    }

    // Biggerspins and Biggerspin flips
    if (trick.rotation === 180 && trick.essential.rotation == 360) {
      // Bigspins
      if (trick.essential.name === 'pop shove-it' || trick.essential.name === 'front shove-it') {
        trick.aka = {
          name: 'bigger spin',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.essential.name = null;
      }

      // Bigger flips
      if (trick.essential.name === '360 flip') {
        trick.aka = {
          name: 'bigger flip',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Bigger heels
      if (trick.essential.name === 'laser flip') {
        trick.aka = {
          name: 'bigger heel',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big hardflips
      if (trick.essential.name === 'hardflip') {
        trick.aka = {
          name: 'bigger hardflip',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big inward heels
      if (trick.essential.name === 'inward heelflip') {
        trick.aka = {
          name: 'bigger inward heel',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }
    }

    // Gazelle spins
    if (trick.rotation === 360 && trick.essential.rotation == 180) {
      if (trick.essential.name === 'pop shove-it' || trick.essential.name === 'front shove-it') {
        trick.aka = {
          name: 'gazelle spin',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.essential.name = null;
      }

      // Gazelle flips
      if (trick.essential.name === 'varial kickflip') {
        trick.aka = {
          name: 'gazelle flip',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Gazelle heels
      if (trick.essential.name === 'varial heelflip') {
        trick.aka = {
          name: 'gazelle heel',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big hardflips
      if (trick.essential.name === 'hardflip') {
        trick.aka = {
          name: 'gazelle hardflip',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }

      // Big inward heels
      if (trick.essential.name === 'inward heelflip') {
        trick.aka = {
          name: 'gazelle inward heel',
          placement: 'essential',
        };

        trick.rotation = null;
        trick.direction = null;
        trick.essential.name = null;
      }
    }
  }

  return trick;
}

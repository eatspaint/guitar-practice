// shifts the root of a mode to the next position to the right
const rotate = (mode: number[]) => {
  const [head, ...rest] = mode;
  return [...rest, head + 12];
};

// evenly lowers mode sequence until the root is at 0
const normalize = (mode: number[]) => {
  const descend = mode[0];
  return mode.map((entry) => entry - descend);
};

// given a mode, rotate to the next root and normalize sequence
const increment = (mode: number[]) => normalize(rotate(mode));

const Ionian = [0, 2, 4, 5, 7, 9, 11];
const Dorian = increment(Ionian);
const Phrygian = increment(Dorian);
const Lydian = increment(Phrygian);
const Mixolydian = increment(Lydian);
const Aoelian = increment(Mixolydian);
const Locrian = increment(Aoelian);

export const modes: Record<string, Record<string, number[]>> = {
  Major: {
    Lydian,
    Ionian,
    Mixolydian,
  },
  Minor: {
    Dorian,
    Aoelian,
    Phrygian,
    Locrian,
  },
};

const POSITION_WIDTH = 5;

export const buildPattern = ({
  position,
  mode,
  strings,
  root,
}: {
  /** where on the fretboard to begin the pattern */
  position: number;
  /** interval sequence to be applied */
  mode: number[];
  /** representation of strings as semitone intervals from bottom string at 0 */
  strings: number[];
  /** semitone to root the pattern around */
  root: number;
}) => {
  const upperPosition = position + POSITION_WIDTH;
  let rootPassed = false;
  return strings.map((offset) => {
    const stringNotes: number[] = [];
    for (let t = offset + position; t < offset + upperPosition; t++) {
      const note = (t - root) % 12;

      if (!rootPassed && note === 0) {
        rootPassed = true;
      }

      if (rootPassed === false) {
        continue;
      }

      if (mode.some((dia) => dia === note)) {
        // subtract the string offset from the tone to get the fret number
        stringNotes.push(t - offset);
      }
    }
    return stringNotes;
  });
};

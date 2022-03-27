import { Sequence, Duration, TabNote } from "../../components/Tableture";
import { buildPattern } from "../patterns";

/**
 * Generate a monophonic run of diatonic notes within a given scale & position
 */
export const scaleRun = ({
  tuning,
  position,
  mode,
  root,
}: {
  tuning: number[];
  position: number;
  mode: number[];
  root: number;
}) => {
  const pattern = buildPattern({ position, strings: tuning, mode, root });
  const notes: TabNote[] = [];
  pattern.forEach((string, idx) => {
    string.forEach((note) => notes.push([idx, String(note)]));
  });

  const sequence: Sequence = [...notes.slice(0, 16)];
  const rhythm: Duration[] = sequence.map(() => "s");
  return {
    sequence,
    rhythm,
  };
};

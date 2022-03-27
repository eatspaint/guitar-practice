import React from "react";
import { styled } from "../styles/theme";

const TabStaff = styled("pre", {
  lineHeight: 1.1,
  userSelect: "none",
});

// Note duration options
export type Duration = "w" | "h" | "q" | "e" | "s";

// Representation of a given note
export type TabNote = [
  number, // string number
  string // fret number or action
];

export type Sequence = (TabNote | TabNote[] | null)[];

interface Tableture {
  /** Paraphonic series of notes to be displayed, with null representing a rest */
  sequence: Sequence;
  /** Series of note lengths, should have the same length as `sequence` */
  rhythm: Duration[];
  /** Ordered list of string labels */
  strings: string[];
  /** Length of one measure (in quarter notes) */
  measure: number;
}

const NoteLength: Record<Duration, number> = {
  w: 16,
  h: 8,
  q: 4,
  e: 2,
  s: 1,
};

export const Tableture = ({
  sequence,
  rhythm,
  strings,
  measure,
}: Tableture) => {
  // calculate length of tab from given rhythm
  const steps = rhythm.reduce((acc, note) => acc + NoteLength[note], 0);

  const tabContent = strings.map((string) => [string]);

  let sustain = 0;
  let rhythmIdx = 0;
  for (let n = 0; n < steps; n++) {
    let event: Sequence[number];

    if (sustain === 0) {
      event = sequence[rhythmIdx];
      sustain = NoteLength[rhythm[rhythmIdx]];
      rhythmIdx += 1;
    }

    tabContent.forEach((line, lineIdx) => {
      // if at the beginning of a measure, add a bar line
      if (n % (measure * 4) === 0) {
        line.push("|");
      }

      let char = "--";

      // If there's a note event, handle it
      if (event) {
        // Print monophonic notes
        if (typeof event[0] === "number" && event[0] === lineIdx) {
          char = (event[1] as string).padEnd(2, "-");
        }

        // Print paraphonic notes
        if (typeof event[0] !== "number") {
          // look for a note on this line
          const note = (event as TabNote[]).find((note) => note[0] === lineIdx);
          if (note) {
            char = (note[1] as string).padEnd(2, "-");
          }
        }
      }

      line.push(char);
    });

    sustain -= 1;
  }

  // flip lines so 0 prints on bottom
  tabContent.reverse();

  return (
    <TabStaff>
      {tabContent.map((string) => {
        const [label, ...line] = string;
        return `${label}${line.join("")}\n`;
      })}
    </TabStaff>
  );
};

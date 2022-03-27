import { Sequence, Duration } from "../components/Tableture";

const standardTuning = ["E", "A", "D", "G", "B", "E"];
const sequence: Sequence = [
  [
    [0, "5"],
    [1, "7"],
    [2, "7"],
  ],
  [1, "7h"],
  [1, "9p"],
  [1, "7"],
  [4, "6"],
  [
    [0, "7"],
    [1, "9"],
    [2, "9"],
    [3, "8"],
    [4, "7"],
    [5, "7"],
  ],
  [3, "9"],
  [4, "9"],
  [5, "11"],
  [5, "\\9"],
  [0, "2"],
  [0, "3"],
  [0, "0"],
];
const rhythm: Duration[] = [
  "q",
  "s",
  "s",
  "e",
  "h",
  "w",
  "q",
  "q",
  "q",
  "q",
  "h",
  "q",
  "q",
];

export const testProps = {
  strings: standardTuning,
  sequence,
  rhythm,
  measure: 4,
};

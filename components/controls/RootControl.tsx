import React from "react";
import { Control } from "./Control";

type Root = number;

interface RootControlProps {
  root: Root;
  setRoot: (root: Root) => void;
}

const rootOptions = [
  { name: "E", value: 0 },
  { name: "F", value: 1 },
  { name: "F#/G♭", value: 2 },
  { name: "G", value: 3 },
  { name: "G#/A♭", value: 4 },
  { name: "A", value: 5 },
  { name: "A#/B♭", value: 6 },
  { name: "B", value: 7 },
  { name: "C", value: 8 },
  { name: "C#/D♭", value: 9 },
  { name: "D", value: 10 },
  { name: "D#/E♭", value: 11 },
];

export const RootControl = ({ root, setRoot }: RootControlProps) => {
  const handleRootChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setRoot(parseInt(event.target.value));
  };

  return (
    <Control>
      <label htmlFor="root-select">Root</label>
      <select id="root-select" onChange={handleRootChange} value={root}>
        {rootOptions.map(({ name, value }) => (
          <option key={name} value={value}>
            {name}
          </option>
        ))}
      </select>
    </Control>
  );
};

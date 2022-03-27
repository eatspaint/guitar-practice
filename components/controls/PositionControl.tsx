import React from "react";
import { Control } from "./Control";

type Position = number;

interface PositionControlProps {
  position: Position;
  setPosition: (position: Position) => void;
}

const positionOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const PositionControl = ({
  position,
  setPosition,
}: PositionControlProps) => {
  const handlePositionChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setPosition(parseInt(event.target.value));
  };

  return (
    <Control>
      <label htmlFor="position-select">Position</label>
      <select
        id="position-select"
        onChange={handlePositionChange}
        value={position}
      >
        {positionOptions.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </Control>
  );
};

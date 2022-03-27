import React from "react";
import { modes } from "../../util/modes";
import { Control } from "./Control";

type Mode = string;

interface ModeControlProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ModeControl = ({ mode, setMode }: ModeControlProps) => {
  const handleModeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setMode(event.target.value);
  };

  return (
    <Control>
      <label htmlFor="mode-select">Mode</label>
      <select id="mode-select" onChange={handleModeChange} value={mode}>
        {Object.keys(modes).map((group) => (
          <optgroup key={group} label={group}>
            {Object.keys(modes[group]).map((modeName) => (
              <option
                key={`${group}-${modeName}`}
                value={`${group}.${modeName}`}
              >
                {modeName}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </Control>
  );
};

import React, { useState } from "react";
import { modes } from "../../util/modes";
import { tunings } from "../../util/tunings";
import { scaleRun } from "../../util/exercises/scaleRun";
import { Tableture } from "../Tableture";
import { ModeControl, PositionControl, RootControl } from "../controls";

export const ScaleRuns = () => {
  const [mode, setMode] = useState<string>("Major.Ionian");
  const [position, setPosition] = useState(0);
  const [root, setRoot] = useState(0);

  const getMode = (modeName: string) => {
    const [group, name] = modeName.split(".");
    return modes[group][name];
  };

  const { sequence, rhythm } = scaleRun({
    tuning: tunings.standard,
    position,
    mode: getMode(mode),
    root,
  });

  return (
    <div>
      <RootControl root={root} setRoot={setRoot} />
      <ModeControl mode={mode} setMode={setMode} />
      <PositionControl position={position} setPosition={setPosition} />
      <Tableture
        sequence={sequence}
        rhythm={rhythm}
        strings={["E", "A", "D", "G", "B", "E"]}
        measure={4}
      />
    </div>
  );
};

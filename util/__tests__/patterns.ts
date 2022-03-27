import { buildPattern } from "../patterns";
import { modes } from "../modes";
import { tunings } from "../tunings";

describe("pattern building", () => {
  it("builds patterns properly when root and position are the same", () => {
    const eMajor = buildPattern({
      position: 0,
      strings: tunings.standard,
      mode: modes.Major.Ionian,
      root: 0,
    });

    expect(eMajor).toEqual([
      [0, 2, 4],
      [0, 2, 4],
      [1, 2, 4],
      [1, 2, 4],
      [0, 2, 4],
      [0, 2, 4],
    ]);
  });

  it("builds patterns properly when root and position are not the same", () => {
    const gMinor = buildPattern({
      position: 2,
      strings: tunings.standard,
      mode: modes.Minor.Aoelian,
      root: 3,
    });

    expect(gMinor).toEqual([
      [3, 5, 6],
      [3, 5, 6],
      [3, 5],
      [2, 3, 5],
      [3, 4, 6],
      [3, 5, 6],
    ]);
  });
});

import { modes } from "../modes";

describe("mode definitions", () => {
  it("properly derives dorian mode", () => {
    expect(modes.Minor.Dorian).toEqual([0, 2, 3, 5, 7, 9, 10]);
  });

  it("properly derives phrygian mode", () => {
    expect(modes.Minor.Phrygian).toEqual([0, 1, 3, 5, 7, 8, 10]);
  });

  it("properly derives lydian mode", () => {
    expect(modes.Major.Lydian).toEqual([0, 2, 4, 6, 7, 9, 11]);
  });

  it("properly derives mixolydian mode", () => {
    expect(modes.Major.Mixolydian).toEqual([0, 2, 4, 5, 7, 9, 10]);
  });

  it("properly derives aoelian mode", () => {
    expect(modes.Minor.Aoelian).toEqual([0, 2, 3, 5, 7, 8, 10]);
  });

  it("properly derives locrian mode", () => {
    expect(modes.Minor.Locrian).toEqual([0, 1, 3, 5, 6, 8, 10]);
  });
});

import { styled } from "../../styles/theme";

export const Control = styled("div", {
  display: "inline-block",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
  "& > label": {
    paddingRight: "0.5rem",
  },
  "& > select": {
    display: "block",
  },
});

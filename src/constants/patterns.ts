import type { Pattern } from "../types";

export const patterns: { [key: string]: Pattern } = {
  "pattern-1": {
    name: "Horizontal",
    backgroundImage:
      "linear-gradient(0deg, rgb(0, 0, 0) 50%, rgb(255, 255, 255) 50%)",
  },
  "pattern-2": {
    name: "Vertical",
    backgroundImage:
      "linear-gradient(to right, rgb(0,0,0), rgb(0,0,0) 5px, rgb(255,255,255) 5px, rgb(255,255,255))",
  },
  "pattern-3": {
    name: "Diagonal",
    backgroundImage:
      "linear-gradient(45deg, rgb(0, 0, 0) 25%, rgb(255, 255, 255) 25%, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 75%, rgb(255, 255, 255) 75%, rgb(255, 255, 255))",
  },
};

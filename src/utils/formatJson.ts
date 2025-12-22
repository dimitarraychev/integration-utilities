import type { FormatFn } from "../models/Format";

export const formatJson: FormatFn = (input, mode) => {
  try {
    if (!input.trim()) return "";

    if (mode === "parse") {
      const parsed = JSON.parse(input);
      return parsed;
    }

    if (mode === "stringify") {
      return JSON.stringify(JSON.parse(input));
    }

    if (mode === "stringify-pretty") {
      return JSON.stringify(JSON.parse(input), null, 2);
    }

    return input;
  } catch (err: any) {
    return `Error: ${err.message}`;
  }
};

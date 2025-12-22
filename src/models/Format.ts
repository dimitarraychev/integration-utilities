export type FormatMode = "parse" | "stringify" | "stringify-pretty";

export interface FormatSettings {
  input: string;
  output: string;
  mode: FormatMode;
}

export type FormatFn = (input: string, mode: FormatMode) => string;

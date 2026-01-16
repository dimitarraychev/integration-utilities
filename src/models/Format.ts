export type FormatMode = "parse" | "stringify" | "inspect";

export interface FormatSettingsModel {
  input: string;
  output: string;
  mode: FormatMode;
}

export type FormatFn = (input: string, mode: FormatMode) => string;

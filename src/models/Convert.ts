export type ConvertMode = "encode" | "decode";

export interface ConvertSettingsModel {
  input: string;
  output: string;
  mode: ConvertMode;
}

export type ConvertFn = (input: string, mode: ConvertMode) => string;

export type ConvertMode = "encode" | "decode";

export interface ConvertSettings {
  input: string;
  output: string;
  mode: ConvertMode;
}

export type ConvertFn = (input: string, mode: ConvertMode) => string;

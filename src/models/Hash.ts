import type { Encoding } from "./Convert";

export interface HashSettingsModel {
  input: string;
  output: string;
  inputEncoding: Encoding;
  outputEncoding: Encoding;
  keyEncoding: Encoding;
  algorithm: HashAlgorithm;
  key: string;
}

export type HashAlgorithm =
  | "SHA-1"
  | "SHA-256"
  | "SHA-384"
  | "SHA-512";

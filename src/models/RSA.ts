export interface RSASettingsModel {
  input: string;
  output: string;
  inputEncoding: "utf8" | "hex" | "base64" | "";
  outputEncoding: "base64" | "hex-lower" | "hex-upper" | "";
  publicKey: string;
  privateKey: string;
  algorithm: RSAAlgorithm;
  hash: RSAHash;
}

export type RSAAlgorithm = "RSA-OAEP";

export type RSAHash = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

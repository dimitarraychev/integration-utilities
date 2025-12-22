export interface GenerateSettings {
  count: number;
  length: number;
  excludeAmbiguous: boolean;
  passwords: string[];
}

export type GenerateFn = (
  settings: Omit<GenerateSettings, "passwords">
) => string[];

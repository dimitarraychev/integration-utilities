export interface GenerateSettingsModel {
  count: number;
  length: number;
  excludeAmbiguous: boolean;
  passwords: string[];
}

export type GenerateFn = (
  settings: Omit<GenerateSettingsModel, "passwords">
) => string[];

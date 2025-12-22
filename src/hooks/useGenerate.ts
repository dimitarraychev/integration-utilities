import { useState, useEffect, useCallback } from "react";
import type { GenerateFn, GenerateSettingsModel } from "../models/Generate";
import { generateKeys } from "../utils/generateKeys";

export const useGenerate = (
  initialSettings: Omit<GenerateSettingsModel, "passwords">,
  generateFn: GenerateFn = generateKeys
) => {
  const [settings, setSettings] = useState<GenerateSettingsModel>({
    ...initialSettings,
    passwords: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number(value),
    }));
  };

  const generate = useCallback(() => {
    try {
      const generated = generateFn({
        count: settings.count,
        length: settings.length,
        excludeAmbiguous: settings.excludeAmbiguous,
      });
      setSettings((prev) => ({ ...prev, passwords: generated }));
    } catch (err: any) {
      setSettings((prev) => ({
        ...prev,
        passwords: [`Error: ${err.message}`],
      }));
    }
  }, [settings.count, settings.length, settings.excludeAmbiguous, generateFn]);

  useEffect(() => {
    generate();
  }, [settings.count, settings.length, settings.excludeAmbiguous, generate]);

  return { settings, handleChange, generate };
};

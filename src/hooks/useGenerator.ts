import { useState, useEffect, useCallback } from "react";
import type { GeneratorFn, GeneratorSettings } from "../models/Generator";
import { generateKeys } from "../utils/generateKeys";

export const useGenerator = (
  initialSettings: Omit<GeneratorSettings, "passwords">,
  generatorFn: GeneratorFn = generateKeys
) => {
  const [settings, setSettings] = useState<GeneratorSettings>({
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

  // Core generation function
  const generate = useCallback(() => {
    try {
      const generated = generatorFn({
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
  }, [settings.count, settings.length, settings.excludeAmbiguous, generatorFn]);

  useEffect(() => {
    generate();
  }, [settings.count, settings.length, settings.excludeAmbiguous, generate]);

  return { settings, handleChange, generate };
};

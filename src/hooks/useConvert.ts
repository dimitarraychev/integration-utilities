import { useState, useEffect } from "react";
import type { ConvertFn, ConvertSettings } from "../models/Convert";

export const useConvert = (
  initialSettings: ConvertSettings,
  convertFn: ConvertFn
) => {
  const [settings, setSettings] = useState<ConvertSettings>(initialSettings);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    try {
      const result = convertFn(settings.input, settings.mode);
      setSettings((prev) => ({ ...prev, output: result }));
    } catch (err: any) {
      setSettings((prev) => ({ ...prev, output: `Error: ${err.message}` }));
    }
  }, [settings.input, settings.mode, convertFn]);

  return { settingsData: settings, handleChange };
};

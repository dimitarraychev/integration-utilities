import { useState, useEffect } from "react";
import type { ConvertFn, ConvertSettingsModel } from "../models/Convert";

export const useConvert = (
  initialSettings: ConvertSettingsModel,
  convertFn: ConvertFn
) => {
  const [settings, setSettings] =
    useState<ConvertSettingsModel>(initialSettings);

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

  return { settings, handleChange };
};

import { useState, useEffect } from "react";
import type { FormatFn, FormatSettingsModel } from "../models/Format";
import { formatJson } from "../utils/formatJson";

export const useFormat = (
  initialSettings: FormatSettingsModel,
  formatFn: FormatFn = formatJson
) => {
  const [settings, setSettings] =
    useState<FormatSettingsModel>(initialSettings);

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
      const result = formatFn(settings.input, settings.mode);

      setSettings((prev) => ({
        ...prev,
        output: result,
        // typeof result === "string" ? result : JSON.stringify(result, null, 2),
      }));
    } catch (err: any) {
      setSettings((prev) => ({ ...prev, output: `Error: ${err.message}` }));
    }
  }, [settings.input, settings.mode, formatFn]);

  return { settings, handleChange };
};

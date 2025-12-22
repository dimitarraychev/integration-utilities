import { useState, useEffect } from "react";
import type { HashSettingsModel } from "../models/Hash";
import { encodeHash } from "../utils/encodeHash";
import { decodeInput } from "../utils/decodeInput";
import { validateInput } from "../utils/validateInput";
import { generateHash } from "../utils/generateHash";

export const useHash = (initialSettings: HashSettingsModel) => {
  const [settings, setSettings] = useState<HashSettingsModel>(initialSettings);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const computeHash = async () => {
      if (!settings.input) {
        setSettings((prev) => ({ ...prev, output: "" }));
        return;
      }

      if (!validateInput(settings.input, settings.inputEncoding)) {
        setSettings((prev) => ({
          ...prev,
          output: `Error: input is not a valid ${settings.inputEncoding} string`,
        }));
        return;
      }

      try {
        const inputBytes = decodeInput(settings.input, settings.inputEncoding);
        const keyBytes = settings.key
          ? decodeInput(settings.key, settings.keyEncoding)
          : undefined;

        const rawHash = await generateHash(
          inputBytes,
          settings.algorithm,
          keyBytes
        );

        const encodedHash = settings.outputEncoding
          ? encodeHash(rawHash.slice().buffer, settings.outputEncoding)
          : encodeHash(rawHash.slice().buffer, "hex-lower");

        setSettings((prev) => ({ ...prev, output: encodedHash }));
      } catch (err) {
        console.error(err);
        setSettings((prev) => ({
          ...prev,
          output: "Error computing hash",
        }));
      }
    };

    computeHash();
  }, [
    settings.input,
    settings.key,
    settings.inputEncoding,
    settings.keyEncoding,
    settings.outputEncoding,
    settings.algorithm,
  ]);

  return { settings, handleChange, setSettings };
};

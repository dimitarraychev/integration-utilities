import type { RSASettingsModel } from "../../models/RSA";
import Button from "../Button/Button";

interface RSASettingsProps {
  settings: RSASettingsModel;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onGenerate: () => Promise<void>;
  onEncrypt: () => Promise<void>;
  onDecrypt: () => Promise<void>;
}

const RSASettings = ({
  settings,
  handleChange,
  onGenerate,
  onEncrypt,
  onDecrypt,
}: RSASettingsProps) => {
  return (
    <div className="settings rsa-settings">
      <label htmlFor="inputEncoding">Input Encoding:</label>
      <select
        name="inputEncoding"
        id="inputEncoding"
        value={settings.inputEncoding}
        onChange={handleChange}
      >
        <option value="utf8">UTF-8</option>
        <option value="hex">Hex</option>
        <option value="base64">Base64</option>
      </select>

      <label htmlFor="outputEncoding">Output Encoding:</label>
      <select
        name="outputEncoding"
        id="outputEncoding"
        value={settings.outputEncoding}
        onChange={handleChange}
      >
        <option value="base64">Base64</option>
        <option value="hex-lower">Hex (lowercase)</option>
        <option value="hex-upper">Hex (uppercase)</option>
      </select>

      <label htmlFor="hash">Hash:</label>
      <select
        name="hash"
        id="hash"
        value={settings.hash}
        onChange={handleChange}
      >
        <option value="SHA-1">SHA-1</option>
        <option value="SHA-256">SHA-256</option>
        <option value="SHA-384">SHA-384</option>
        <option value="SHA-512">SHA-512</option>
      </select>

      <label htmlFor="publicKey">Public Key:</label>
      <textarea
        name="publicKey"
        id="publicKey"
        value={settings.publicKey}
        onChange={handleChange}
      />

      <label htmlFor="privateKey">Private Key:</label>
      <textarea
        name="privateKey"
        id="privateKey"
        value={settings.privateKey}
        onChange={handleChange}
      />

      <div className="rsa-actions">
        <Button title="Generate" text="Generate" onClick={onGenerate} />
        <Button title="Encrypt" text="Encrypt" onClick={onEncrypt} />
        <Button title="Decrypt" text="Decrypt" onClick={onDecrypt} />
      </div>
    </div>
  );
};

export default RSASettings;

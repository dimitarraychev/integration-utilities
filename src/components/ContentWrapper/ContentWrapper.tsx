import "./ContentWrapper.css";
import type { Settings } from "../../models/Settings";
import { toast } from "react-toastify";

interface ContentWrapperProps {
  settingsData: Settings;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const ContentWrapper = ({
  settingsData,
  handleChange,
}: ContentWrapperProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(settingsData.output);
    toast.success("URL copied to clipboard ✅");
  };

  return (
    <div className="content">
      <label htmlFor="input">Input:</label>
      <textarea
        name="input"
        id="input"
        value={settingsData.input}
        onChange={handleChange}
      />

      <label htmlFor="output">Output:</label>
      <textarea
        readOnly
        name="output"
        id="output"
        value={settingsData.output}
        onChange={handleChange}
        onClick={handleCopy}
      />
    </div>
  );
};

export default ContentWrapper;

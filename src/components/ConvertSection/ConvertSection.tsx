import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useConvert } from "../../hooks/useConvert";
import type { ConvertSettings } from "../../models/Convert";

interface ConvertSectionProps {
  title: string;
  convertFn: (input: string, mode: "encode" | "decode") => string;
}

const ConvertSection = ({ title, convertFn }: ConvertSectionProps) => {
  const initialSettings: ConvertSettings = {
    input: "",
    output: "",
    mode: "decode",
  };

  const { settingsData, handleChange } = useConvert(initialSettings, convertFn);

  return (
    <section className="converter-section section">
      <h3 className="section-header">{title}</h3>
      <div className="section-columns">
        <div className="settings">
          <label htmlFor="mode">Mode:</label>
          <select name="mode" value={settingsData.mode} onChange={handleChange}>
            <option value="decode">Decode</option>
            <option value="encode">Encode</option>
          </select>
        </div>

        <ContentWrapper
          input={settingsData.input}
          output={settingsData.output}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default ConvertSection;

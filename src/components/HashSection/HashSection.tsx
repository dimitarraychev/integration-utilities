import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useHash } from "../../hooks/useHash";
import type { HashAlgorithm, HashSettings } from "../../models/Hash";

interface HashSectionProps {
  algorithm: HashAlgorithm;
  title?: string;
}

const HashSection = ({ algorithm, title }: HashSectionProps) => {
  const initialSettings: HashSettings = {
    input: "",
    output: "",
    inputEncoding: "utf8",
    outputEncoding: "hex-lower",
    keyEncoding: "utf8",
    algorithm,
    key: "",
  };

  const { settingsData, handleChange } = useHash(initialSettings);

  return (
    <section className={`hash-section section ${algorithm.toLowerCase()}`}>
      <h3 className="section-header">{title || `Hash ${algorithm}`}</h3>

      <div className="section-columns">
        <SettingsWrapper
          settingsData={settingsData}
          handleChange={handleChange}
        />
        <ContentWrapper
          input={settingsData.input}
          output={settingsData.output}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default HashSection;

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useFormat } from "../../hooks/useFormat";
import type { FormatSettingsModel } from "../../models/Format";
import CustomRadio from "../CustomRadio/CustomRadio";

const FormatSection = () => {
  const initialSettings: FormatSettingsModel = {
    input: "",
    output: "",
    mode: "parse",
  };

  const { settings, handleChange } = useFormat(initialSettings);

  return (
    <section className="converter-section section">
      <h2 className="section-header">Format JSON</h2>
      <div className="section-columns">
        <div className="settings">
          <CustomRadio
            name="mode"
            label="Mode:"
            value={settings.mode}
            options={[
              { label: "Parse", value: "parse" },
              { label: "Stringify", value: "stringify" },
              { label: "Inspect", value: "inspect" },
            ]}
            onChange={(value) =>
              handleChange({
                target: { name: "mode", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />
        </div>

        <ContentWrapper
          hasInput={true}
          hasJsonViewerOutput={settings.mode === "inspect"}
          input={settings.input}
          output={settings.output}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default FormatSection;

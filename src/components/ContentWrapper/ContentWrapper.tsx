import "./ContentWrapper.css";
import AutoExpandingTextarea from "../AutoExpandingTextarea/AutoExpandingTextarea";

interface ContentWrapperProps {
  hasInput?: boolean;
  input: string;
  output: string;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const ContentWrapper = ({
  hasInput = true,
  input,
  output,
  handleChange,
}: ContentWrapperProps) => {
  return (
    <div className="content">
      {hasInput && (
        <AutoExpandingTextarea
          name="input"
          value={input}
          showCopy
          onChange={handleChange}
          placeholder="Enter your input here..."
        />
      )}

      <AutoExpandingTextarea
        name="output"
        value={output}
        readOnly
        showCopy
        onChange={handleChange}
        placeholder="Output will appear here..."
      />
    </div>
  );
};

export default ContentWrapper;

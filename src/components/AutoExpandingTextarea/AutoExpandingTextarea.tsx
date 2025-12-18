import { useRef, useEffect } from "react";
import copySvg from "../../assets/copy.svg";
import { toast } from "react-toastify";
import "./AutoExpandingTextarea.css";

interface AutoExpandingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxHeight?: number;
  showCopy?: boolean;
}

const AutoExpandingTextarea = ({
  value,
  onChange,
  maxHeight = 512, // bigger max height
  showCopy = false,
  readOnly = false,
  ...props
}: AutoExpandingTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, maxHeight) + "px";
    onChange(e);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard ✅");
  };

  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, maxHeight) + "px";
    }
  }, [value, maxHeight]);

  return (
    <div className="auto-textarea-wrapper">
      <textarea
        {...props}
        ref={textareaRef}
        value={value}
        onChange={handleInput}
        readOnly={readOnly}
        className="auto-textarea"
      />
      {showCopy && (
        <img
          src={copySvg}
          alt="Copy"
          onClick={handleCopy}
          className="copy-btn"
        />
      )}
    </div>
  );
};

export default AutoExpandingTextarea;

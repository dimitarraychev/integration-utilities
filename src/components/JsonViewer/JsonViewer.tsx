import ReactJson from "react-json-view";
import "./JsonViewer.css";

interface JsonViewerProps {
  jsonData: {};
  title: string;
}

const JsonViewer = ({ jsonData, title }: JsonViewerProps) => {
  return (
    <div className="json-view-wrapper">
      <label className="json-title">{title}</label>
      <ReactJson
        src={jsonData}
        theme="monokai"
        enableClipboard={true}
        displayDataTypes={false}
        displayObjectSize={false}
        style={{ fontSize: "14px" }}
      />
    </div>
  );
};

export default JsonViewer;

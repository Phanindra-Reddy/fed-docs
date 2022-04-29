import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { options } from "../utils/editorOptions";

const PlaygroundEditor = ({value, onValueChange, language, height, width}) => {

  const fontSizes = {
    SMALL: "12px",
    MEDIUM: "14px",
    LARGE: "16px",
    XL: "18Px",
  };

  const [editorFont, setEditorFont] = useState("MEDIUM");

  return (
    <>
    
      <Editor
        height={height || ""}
        width={width || ""}
        theme="vs-dark"
        language={language}
        value={value}
        onChange={(newSource) => onValueChange(newSource)}
        options={{
          options,
          fontSize: fontSizes[editorFont],
        }}
      />
    </>
  );
};

export default PlaygroundEditor;

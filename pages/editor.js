import React, { Fragment, useState } from "react";
import HeadComp from "../components/HeadComp";
import Editor from "@monaco-editor/react";
import monacoThemes from "monaco-themes/themes/themelist.json";
import { Divider, MenuItem, TextField, Typography } from "@mui/material";
import { supportedLanguages } from "../utils/supportedLanguages";
import { options } from "../utils/editorOptions";
import EditorInputFragment from "../components/EditorInputFragment";
import EditorOutputFragment from "../components/EditorOutputFragment";
import { FaPlay } from "react-icons/fa";

const FedEditor = () => {
  const fontSizes = {
    SMALL: "12px",
    MEDIUM: "14px",
    LARGE: "16px",
    XL: "18Px",
  };
  const defaultThemes = ["vs-dark", "light"];
  const [language, setLanguage] = useState("javascript");
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const [editorFont, setEditorFont] = useState("MEDIUM");
  const [editorSource, setEditorSource] = useState("");
  const [editorInput, setEditorInput] = useState("");
  const [editorOutput, setEditorOutput] = useState("");

  const handleThemeChange = (e) => {
    setEditorTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleFontChange = (e) => {
    setEditorFont(e.target.value);
  };

  const execute = () => {
    if (Babel) {
      let code = editorSource;
      try {
        // window.Babel
        let parseCode = Babel.transform(code, {
          presets: ["es2015", "stage-2", "react"], // 'minify
          //plugins: ['minify-guarded-expressions']
        }).code;

        console.log(parseCode);
      } catch (err) {
        this.setState({ errCompile: err.message });
      }
    }
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen bg-gray-700 text-white">
      <HeadComp title="FED Docs" description="IDE" />

      <div className="flex flex-col md:flex-row items-center mx-4">
        <div className="mt-4 mb-4 mr-5 bg-white">
          {/* <Typography
          variant="h6"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Languages
        </Typography> */}
          <TextField
            select
            variant="filled"
            value={language}
            onChange={handleLanguageChange}
            className="full-width  dark:bg-gray-100"
            label="Language"
            sx={{ width: "200px" }}
          >
            {supportedLanguages?.map((language) => (
              <MenuItem key={language.id} value={language.name}>
                {language.name}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="mr-5 bg-white">
          {/* <Typography
          variant="h6"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Themes
        </Typography> */}
          <TextField
            select
            variant="filled"
            value={editorTheme}
            onChange={handleThemeChange}
            className="full-width dark:bg-gray-100"
            label="Editor Theme"
            sx={{ width: "250px" }}
          >
            {defaultThemes?.map((theme) => (
              <MenuItem key={theme} value={theme}>
                {theme}
              </MenuItem>
            ))}
            <MenuItem disabled>
              <Divider />
            </MenuItem>
            {Object.entries(monacoThemes).map(([themeId, themeName]) => (
              <MenuItem key={themeId} value={themeId}>
                {themeName}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="mt-4 mb-4 bg-white">
          {/* <Typography
          variant="h6"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Languages
        </Typography> */}
          <TextField
            select
            variant="filled"
            value={editorFont}
            onChange={handleFontChange}
            className="full-width dark:bg-gray-100"
            label="Font Size"
            sx={{ width: "200px" }}
          >
            {Object.keys(fontSizes)?.map((fontSize) => (
              <MenuItem key={fontSizes[fontSize]} value={fontSize}>
                {fontSize}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className=" mb-4 flex">
        <Editor
          height="100vh"
          width="70vw"
          theme={editorTheme}
          //language={language}
          language="javascript"
          //path={language}
          value={editorSource}
          onChange={(newSource) => setEditorSource(newSource)}
          options={{
            options,
            fontSize: fontSizes[editorFont],
          }}
          //onMount={handleEditorWillMount}
        />
        <div className="w-96 flex flex-col  min-h-screen px-4">
          <EditorInputFragment />
          <EditorOutputFragment />
        </div>
      </div>

      <div className="fixed right-12 bottom-10">
        <button
          type="button"
          className="h-16 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex items-center justify-center"
          onClick={() => execute()}
        >
          <span className="text-xl">
            <FaPlay />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FedEditor;

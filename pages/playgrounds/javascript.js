import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeadComp from "../../components/HeadComp";
import Split from "react-split";
import PlaygroundEditor from "../../components/PlaygroundEditor";
import IFrame from "../../components/IFrame";
import { BiMinus } from "react-icons/bi";
import ScreenSizeModel from "../../components/ScreenSizeModel";
import useLocalStorage from "../../hooks/useLocalStorage";



const HtmlCss = () => {
  
  const [collapsedIndex, setCollapsedIndex] = useState(null);
  const [srcDoc, setSrcDoc] = useState("");
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");

  useEffect(() => {
    const time = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(time);
  }, [html, css, js]);

  return (
    <>
      <HeadComp title="FED Docs" description="JavaScript Playground" />
      <ScreenSizeModel/>
      <div className="dark:bg-gray-900 dark:text-white">
        <Split direction="vertical" style={{ height: "calc(100vh - 4rem)" }}>
          <Split className="flex" collapsed={collapsedIndex}>
            <div>
              <span>
                {/* <span className="font-medium bg-orange-500">HTML</span> */}
                {/* <CollapseBtn onClick={()=>setCollapsedIndex(0)}/> */}
                <PlaygroundEditor
                  value={html}
                  onValueChange={setHtml}
                  language="html"
                  height="100%"
                />
              </span>
            </div>
            <div>
              <span>
                {/* <span className="font-medium bg-blue-500">CSS</span> */}
                {/* <CollapseBtn onClick={()=>setCollapsedIndex(1)}/> */}
                <PlaygroundEditor
                  value={css}
                  onValueChange={setCss}
                  language="css"
                  height="100%"
                />
              </span>
            </div>
            <div>
              <span>
                {/* <span className="font-medium bg-yellow-500">JavaScript</span> */}
                {/* <CollapseBtn onClick={()=>setCollapsedIndex(2)}/> */}
                <PlaygroundEditor
                  value={js}
                  onValueChange={setJs}
                  language="javascript"
                  height="100%"
                />
              </span>
            </div>
          </Split>
          <div>
            <IFrame srcDoc={srcDoc} />
          </div>
        </Split>
      </div>
    </>
  );
};

export default HtmlCss;

const Options = ({ children }) => {
  return (
    <div className="bg-gray-300 relative overflow-hidden">
      <div className="absolute top-2 left-2 flex flex-col space-y-2">
        {children}
      </div>
    </div>
  );
};

const CollapseBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <BiMinus className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

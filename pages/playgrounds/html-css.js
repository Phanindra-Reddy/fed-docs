import React, { useState, useEffect } from "react";
import HeadComp from "../../components/HeadComp";
import Split from "react-split";
import PlaygroundEditor from "../../components/PlaygroundEditor";
import IFrame from "../../components/IFrame";
import { BiMinus } from "react-icons/bi";
import ScreenSizeModel from "../../components/ScreenSizeModel";
import useLocalStorage from "../../hooks/useLocalStorage";

const sampleHtml = `
<h1>Welcome To</h1>
<h1>FED Docs</h1>
<h1>Playgrounds</h1>

<p>Happy coding :)</p>
<span>chnange the code to see the output</span>
`;

const sampleCss = `
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Cookie&family=Dancing+Script:wght@500&family=EB+Garamond:ital,wght@1,500&family=Satisfy&display=swap');

body{
    background-color: #03203C;
    color: white;
    font-size: larger;
    text-align: center;
    font-family: 'Comfortaa', cursive;
}

p{
    color: blueviolet;
    font-size: larger;
}

span{
    font-size: small;
}
`;

function HtmlCss() {
  const [collapsedIndex, setCollapsedIndex] = useState(null);
  const [srcDoc, setSrcDoc] = useState("");
  const [html, setHtml] = useLocalStorage("html", sampleHtml);
  const [css, setCss] = useLocalStorage("css", sampleCss);

  useEffect(() => {
    const time = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(time);
  }, [html, css]);

  if (typeof window !== "undefined") {
    var DOC = window.document.body.offsetWidth;
  }

  return (
    <>
      <HeadComp title="FED Docs" description="HTML-CSS Playground" />
      <ScreenSizeModel />
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <Split className="split" collapsed={collapsedIndex}>
          <span>
            <span className="font-medium bg-orange-500">HTML</span>
            {/* <span><CollapseBtn onClick={()=>setCollapsedIndex(0)}/></span> */}
            <PlaygroundEditor
              value={html}
              onValueChange={setHtml}
              language="html"
              height="100vh"
            />
          </span>
          <span>
            <span className="font-medium bg-blue-500">CSS</span>
            {/* <span><CollapseBtn onClick={()=>setCollapsedIndex(1)}/></span> */}
            <PlaygroundEditor
              value={css}
              onValueChange={setCss}
              language="css"
              height="100vh"
            />
          </span>
          <div>
            <span className="font-medium bg-gray-300">Browser</span>
            <IFrame srcDoc={srcDoc} />
          </div>
        </Split>
      </div>
    </>
  );
}

export default HtmlCss;

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

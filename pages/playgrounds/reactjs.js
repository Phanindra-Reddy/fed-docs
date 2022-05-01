import React from "react";
import HeadComp from "../../components/HeadComp";
import ScreenSizeModel from "../../components/ScreenSizeModel";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Split from "react-split";
import useLocalStorage from "../../hooks/useLocalStorage";

const code = `
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{textAlign:"center"}}>
      <h1>Hello ReactTree</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)} style={{backgroundColor:"aqua",padding:"5px"}}>Decrement</button>
      <button onClick={() => setCount(count + 1)} style={{backgroundColor:"aqua",padding:"5px",marginLeft:"10px"}}>Increment</button>
    </div>
  );
}
`;

const ReactPlayground = () => {

  const [toastAlert, setToastAlert] = useLocalStorage("toastAlert", true)

  const handleToastAlert = () => {
    setToastAlert(false);
  } 

  return (
    <>
      <HeadComp title="FED Docs" description="JavaScript Playground" />
      <ScreenSizeModel />
      <div className="h-screen flex flex-col overflow-hidden">
        {
          toastAlert && (
            <div className="flex justify-between items-center p-1 my-2 mx-2 border border-blue-700 bg-blue-200">
              <p className="text-xl ml-5 bg-transparent">We are working on better react playground interface. STAY CONNECTED 🙂</p>
              <button className="font-medium cursor-pointer mx-5 text-white px-5 py-1 rounded-sm bg-blue-700" onClick={handleToastAlert}>X</button>
            </div>
          )
        }
        <Split className="split">
          <LiveProvider code={code} className="bg-blue-600">
            <div className="min-h-screen">
              <LiveEditor />
            </div>
            <Split direction="vertical">
              <LiveError />
              <LivePreview />
            </Split>
          </LiveProvider>
        </Split>
      </div>
    </>
  );
};

export default ReactPlayground;

import React, { useState } from "react";

const EditorInputFragment = () => {

  const [Input, setInput] = useState("");


  return (
    <div>
      <h1 className="font-medium text-xl dark:text-white">Enter Input</h1>
      <textarea
        className="resize-none rounded-md w-full h-48 my-4 p-5 bg-transparent dark:text-white"
        placeholder="Input goes here..."
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    </div>
  );
};

export default EditorInputFragment;

import React, { useState, useEffect } from "react";
import HeadComp from "../../components/HeadComp";
import ScreenSizeModel from "../../components/ScreenSizeModel";





const ReactPlayground = () => {
  return (
    <>
      <HeadComp title="FED Docs" description="JavaScript Playground" />
      {/* <ScreenSizeModel /> */}
      <div className="h-screen flex flex-col overflow-hidden  dark:bg-gray-900">
        <div className="flex justify-center mt-48">
          <span className="text-xl font-medium dark:text-white">Coming soon... 🙂</span>
        </div>
      </div>
    </>
  );
};

export default ReactPlayground;


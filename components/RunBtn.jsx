import React from "react";
import { FaPlay } from "react-icons/fa";

const RunBtn = () => {
  return (
    <>
      <button
        type="button"
        className="h-16 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex items-center justify-center"
      >
        <span className="text-xl">
          <FaPlay />
        </span>
      </button>
    </>
  );
};

export default RunBtn;

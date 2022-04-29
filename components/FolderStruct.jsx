import { useState, useEffect, createRef } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

function FolderStruct({ data }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleFolderName = () => {
    setShow(!show);
    localStorage.setItem("openFolder", !show)
  };

  const handleTopic = () => {
    router.push(`/${data?.mainTitle}/${data?.value}`);
  };

  useEffect(()=>{
    if (localStorage.getItem("openFolder") !== null) {
      var openFolder = JSON.parse(localStorage.getItem("openFolder"));
      setShow(openFolder)
  }
  },[])

  if (data.isFolder) {
    return (
      <>
        <div>
          <h1
            className={`cursor-pointer flex items-center justify-between font-medium text-xl mb-1 border-b py-2 ${
              data.mainRoot &&
              "bg-gradient-to-r from-purple-500 to-pink-500 p-2 border-2 text-white"
            }`}
            onClick={handleFolderName}
          >
            <span className="flex items-center">
              {data?.icon} 
              <span className="ml-3">{data.name}</span>
            </span>
            
            {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </h1>

          <div style={{ display: show ? "block" : "none" }} className="px-5">
            {data?.items?.map((item) => (
              <FolderStruct key={item.id} data={item} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          key={data.id}
          className={`w-full cursor-pointer font-normal text-lg ${
            data?.value === router?.query?.slug
              && "bg-gray-300 dark:text-black"
          } rounded-md p-2 mb-1 hover:bg-blue-300 dark:hover:text-white dark:hover:bg-blue-600 border-b`}
          onClick={handleTopic}
        >
          {data?.name}
        </div>
      </>
    );
  }
}

export default FolderStruct;

import Link from "next/link";
import React from "react";
import HeadComp from "./HeadComp";
import { AiOutlineProject } from "react-icons/ai";
import { SiBlogger } from "react-icons/si";
import { CgDisplayGrid } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaSitemap } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const DashboardSideNav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <div className="w-0 md:w-1/5 border-r-2 md:border-r-purple-600 dark:text-white">
        <nav className="">
          <Link href="/javascript" passHref>
            <a
              className={`text-xl flex items-center my-3 hover:bg-gray-200 dark:hover:text-blue-700 pl-5 py-2 ${
                pathname === "/javascript"
                  ? "text-blue-700 border-l-4 border-l-blue-700 bg-blue-50"
                  : ""
              }`}
            >
              <span className="mr-5 text-2xl">
                <SiJavascript />
              </span>
              <span>JavaScript</span>
            </a>
          </Link>
          <Link href="/reactjs">
            <a
              className={`text-xl flex items-center my-3 hover:bg-gray-200 dark:hover:text-blue-700 pl-5 py-2 ${
                pathname === "/reactjs"
                  ? "text-blue-700 border-l-4 border-l-blue-700 bg-blue-50"
                  : ""
              }`}
            >
              <span className="mr-5 text-2xl">
                <FaReact />
              </span>
              <span>ReactJS</span>
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`text-xl flex items-center my-3 hover:bg-gray-200 dark:hover:text-blue-700 pl-5 py-2 ${
                pathname === "/blogs"
                  ? "text-blue-700 border-l-4 border-l-blue-700 bg-blue-50"
                  : ""
              }`}
            >
              <span className="mr-5 text-2xl">
                <SiBlogger />
              </span>
              <span>Blogs</span>
            </a>
          </Link>
          <Link href="/playgrounds">
            <a
              className={`text-xl flex items-center my-3 hover:bg-gray-200 dark:hover:text-blue-700 pl-5 py-2 ${
                pathname === "/playgrounds"
                  ? "text-blue-700 md:border-l-4 md:border-l-blue-700 bg-blue-50"
                  : ""
              }`}
            >
              <span className="mr-5 text-2xl">
                <CgDisplayGrid />
              </span>
              <span>Playgrounds</span>
            </a>
          </Link>
          <Link href="/learning-paths">
            <a
              className={`text-xl flex items-center my-3 hover:bg-gray-200 dark:hover:text-blue-700 pl-5 py-2 ${
                pathname === "/learning-paths"
                  ? "text-blue-700 md:border-l-4 md:border-l-blue-700 bg-blue-50"
                  : ""
              }`}
            >
              <span className="mr-5 text-2xl">
                <FaSitemap />
              </span>
              <span>Learning Paths</span>
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`text-xl flex items-center my-3 hover:bg-gray-200 dark:hover:text-blue-700 pl-5 py-2 ${
                pathname === "/projects"
                  ? "text-blue-700 md:border-l-4 md:border-l-blue-700 bg-blue-50"
                  : ""
              }`}
            >
              <span className="mr-5 text-2xl">
                <AiOutlineProject />
              </span>
              <span>Projects</span>
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default DashboardSideNav;

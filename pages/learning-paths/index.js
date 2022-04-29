import React from "react";
import DashboardSideNav from "../../components/DashboardSideNav";
import HeadComp from "../../components/HeadComp";
import Link from "next/link";
import Image from "next/image";

const LearningPaths = () => {
  return (
    <>
      <div className="dark:bg-gray-900">
        <HeadComp title="FED Docs" description="Learning Paths/Road Maps" />
        <div className="flex">
          <React.Fragment>
            <DashboardSideNav />
          </React.Fragment>
          <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
            
            <div className="my-10 flex flex-col items-center">
              <h1 className="text-5xl font-bold mb-5 text-center dark:text-white">
                Learning Paths/Road Maps
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
                Learning paths are <span className="font-bold">content + job-backed</span> roadmaps curated by
                developers to accelerate your learning. Following these paths
                will get you started immediately with the developer skills you
                need.
              </p>
            </div>

            <div className="flex items-end justify-evenly flex-wrap">
              <Link href="/learning-paths/html">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/html.png"
                      alt="html-css"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      HTML Roadmap
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">HTML5</span>
                  </div>
                </a>
              </Link>

              <Link href="/learning-paths/css">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/css.svg"
                      alt="html-css"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      CSS Roadmap
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">CSS3</span>
                  </div>
                </a>
              </Link>

              <Link href="/learning-paths/javascript">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/js.png"
                      alt="html-css"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      Javascript Roadmap
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">JavaScript</span>
                  </div>
                </a>
              </Link>

              <Link href="/learning-paths/react">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/react.png"
                      alt="html-css"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      Reactjs Roadmap
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">ReactJs</span>
                  </div>
                </a>
              </Link>

              {/* <Link href="/learning-paths/react-ecosystem">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/react-ecosystem.jpeg"
                      alt="html-css"
                      width={50}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      React Eco-System
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">
                      React Ecosystem
                    </span>
                  </div>
                </a>
              </Link> */}

              <Link href="/learning-paths/nextjs">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/nextjs.png"
                      alt="html-css"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      Nextjs Roadmap
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">Next.js</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPaths;

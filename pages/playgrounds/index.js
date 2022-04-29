import Link from "next/link";
import React from "react";
import HeadComp from "../../components/HeadComp";
import { useRouter } from "next/router";
import Image from "next/image";
import DashboardSideNav from "../../components/DashboardSideNav";

const Playgrounds = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="dark:bg-gray-900">
        <HeadComp title="FED Docs" description="Playgrounds" />
        <div className="flex">
          <React.Fragment>
            <DashboardSideNav/>
          </React.Fragment>
          <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
            <div className="my-10 flex flex-col items-center">
              <h1 className="text-5xl font-bold mb-5 dark:text-white">
                Playgrounds
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
                Code and run your own experiments! Playground snippets bring you
                a real development environment without the hassle of setting it
                all up.
              </p>
            </div>

            <div className="flex items-end justify-evenly flex-wrap">
              <Link href="/playgrounds/html-css">
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
                      HTML/CSS playground
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">HTML/CSS</span>
                  </div>
                </a>
              </Link>

              <Link href="/playgrounds/javascript">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/js.png"
                      alt="javascript"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      JavaScript playground
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">JavaScript</span>
                  </div>
                </a>
              </Link>

              <Link href="/playgrounds/reactjs">
                <a className="flex items-center bg-white p-5 border rounded-md shadow-md w-80 my-5 hover:bg-gray-100">
                  <div className="bg-gray-200 flex items-center justify-center p-2">
                    <Image
                      src="/react.png"
                      alt="react"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-5">
                    <span className="text-gray-500 font-medium">
                      React playground
                    </span>
                    <br />
                    <span className="text-2xl font-semibold">React</span>
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

export default Playgrounds;

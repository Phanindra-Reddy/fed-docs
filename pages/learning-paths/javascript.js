import React from "react";
import DashboardSideNav from "../../components/DashboardSideNav";
import HeadComp from "../../components/HeadComp";
import Link from "next/link";
import Image from "next/image";



const JSRoadmap = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeadComp title="FED Docs" description="Learning Paths/Road Maps" />
      <div className="flex">
        <React.Fragment>
          <DashboardSideNav />
        </React.Fragment>
        <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
          <div className="my-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-5 text-center text-yellow-400">
              JavaScript Learning Path
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
              JavaScript, often abbreviated JS, is a programming language that
              is one of the core technologies of the World Wide Web, alongside
              HTML and CSS. Over 97% of websites use JavaScript on the client
              side for web page behavior, often incorporating third-party
              libraries
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap">
            <Image
              src="/Modern_JavaScript_Learning_Path.jpg"
              alt="react_roadmap"
              width={1000}
              height={1000}
              objectFit="contain"
              placeholder="blur"
              blurDataURL
             
            />
          </div>
          <div className="text-center my-10">
            <Link href="https://phanindra-reddy.github.io/js-books/JS_learning_path.pdf">
              <a target="_blank" className="text-xl text-blue-600 underline">
                JavaScript Roadmap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSRoadmap;

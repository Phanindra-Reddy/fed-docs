import React from "react";
import DashboardSideNav from "../../components/DashboardSideNav";
import HeadComp from "../../components/HeadComp";
import Link from "next/link";
import Image from "next/image";

const CssRoadmap = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeadComp title="FED Docs" description="Learning Paths/Road Maps" />
      <div className="flex">
        <React.Fragment>
          <DashboardSideNav />
        </React.Fragment>
        <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
          <div className="my-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-5 text-center text-blue-500">
              CSS3 Learning Path
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML. CSS is a cornerstone technology of the
              World Wide Web, alongside HTML and JavaScript.
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap">
            <Image
              src="/css_roadmap.png"
              alt="nextjs_roadmap"
              width={1000}
              height={1000}
              objectFit="contain"
              placeholder="blur"
              blurDataURL
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssRoadmap;

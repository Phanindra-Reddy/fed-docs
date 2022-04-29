import React from "react";
import Link from "next/link";
import DashboardSideNav from "../../components/DashboardSideNav";
import HeadComp from "../../components/HeadComp";
import Image from "next/image";

const HtmlRoadmap = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeadComp title="FED Docs" description="HTML5 Learning Path" />
      <div className="flex">
        <React.Fragment>
          <DashboardSideNav />
        </React.Fragment>
        <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
          <div className="my-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-5 text-center text-orange-500">
              HTML5 Learning Path
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It can be assisted by technologies such as Cascading Style Sheets
              and scripting languages such as JavaScript.
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap">
            <Image
              src="/html_roadmap.png"
              alt="nextjs_roadmap"
              width={700}
              height={700}
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

export default HtmlRoadmap;

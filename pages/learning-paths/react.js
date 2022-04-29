import React, { useState } from "react";
import DashboardSideNav from "../../components/DashboardSideNav";
import HeadComp from "../../components/HeadComp";
import Image from "next/image";
import Link from "next/link";

const ReactRoadmap = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeadComp title="FED Docs" description="Learning Paths/Road Maps" />
      <div className="flex">
        <React.Fragment>
          <DashboardSideNav />
        </React.Fragment>
        <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
          <div className="my-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-5 text-center text-sky-500">
              ReactJS Learning Path
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
            </p>
          </div>

          <div className="flex items-end justify-evenly flex-wrap">
            <Image
              src="/react_learning_path.jpg"
              alt="react_roadmap"
              width={1000}
              height={1000}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="blur"
            />
          </div>
          <div className="text-center my-10">
            <Link href="https://phanindra-reddy.github.io/js-books/react_learning_path.pdf">
              <a target="_blank" className="text-xl text-blue-600 underline">
                React Roadmap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactRoadmap;

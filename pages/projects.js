import React from "react";
import DashboardSideNav from "../components/DashboardSideNav";
import HeadComp from "../components/HeadComp";
import ProjectsComp from "../components/ProjectsComp";

const projects = () => {
  return (
    <>
      <div className="dark:bg-gray-900">
        <HeadComp title="FED Docs" description="Projects" />
        <div className="flex">
          <React.Fragment>
            <DashboardSideNav />
          </React.Fragment>
          <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
            <div className="mt-10 flex flex-col items-center">
              <h1 className="text-5xl font-bold mb-5 text-center dark:text-white">
                Build Amazing Projects
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
                Projects offer a practical and hands-on approach to reinforce
                what you&apos;ve learnt on FED Docs. Build a wide range of
                projects to hone your development skills.
              </p>
            </div>
            <div>
              <ProjectsComp />
            </div>
            <div className="my-10 flex items-center justify-center font-medium dark:text-white">
              Learn ✨ Explore ✨ Build
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;

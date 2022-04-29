import React from "react";
import DashboardSideNav from "../../components/DashboardSideNav";
import HeadComp from "../../components/HeadComp";


const ReactEcosystemRoadmap = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeadComp title="FED Docs" description="Learning Paths/Road Maps" />
      <div className="flex">
        <React.Fragment>
          <DashboardSideNav />
        </React.Fragment>
        <div className="flex-1 bg-gray-50 min-h-screen dark:bg-gray-900">
          <div className="my-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-5 text-center text-sky-700">
              React Ecosystem Learning Path
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl text-center dark:text-gray-200">
              something about ReactEcosystem
            </p>
          </div>

          <div className="flex items-end justify-evenly flex-wrap">
         React Ecosystem Roadmap 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactEcosystemRoadmap;

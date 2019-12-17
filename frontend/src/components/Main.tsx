import React from "react";
import Menu from "./Menu";
import WorkStation from "./WorkStation";

const Main: React.FC = () => {
  return (
    <main>
      <h2>Main Component</h2>
      <div className="h-screen flex">
        <div className="w-1/5 border-2 border-gray-200">
          <Menu />
        </div>
        <div className="w-4/5">
          <WorkStation />
        </div>
      </div>
    </main>
  );
};

export default Main;

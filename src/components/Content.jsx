import React, { useState } from "react";
import SideNav from "./SideNav";
import MainContent from "./MainContent";
import TopNav from "./TopNav";

const Content = () => {
  const [sideNavOpen, setSideNavOpen] = useState(true);

  return (
    <div className="border-r-[1px] border-[#282a32]">
      <TopNav sideNavOpen={sideNavOpen} />
      <div className="mt-[51px] flex">
        <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
        <MainContent sideNavOpen={sideNavOpen} />
      </div>
    </div>
  );
};

export default Content;

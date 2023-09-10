import React from "react";
import MainHeader from "./MainHeader";

const MainContent = ({ sideNavOpen }) => {
  return (
    <div className="w-full" style={{ marginLeft: sideNavOpen ? "251px" : "72px" }}>
      <MainHeader />
    </div>
  );
};

export default MainContent;

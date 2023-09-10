import React from "react";
import MainHeader from "./MainHeader";
import TopChains from "./TopChains";
import ChainsData from "./ChainsData";
import MainFooter from "./MainFooter";

const MainContent = ({ sideNavOpen }) => {
  return (
    <div
      className="w-full"
      style={{ marginLeft: sideNavOpen ? "251px" : "72px" }}
    >
      <MainHeader />
      <TopChains />
      <ChainsData sideNavOpen={sideNavOpen}/>
      <MainFooter />
    </div>
  );
};

export default MainContent;

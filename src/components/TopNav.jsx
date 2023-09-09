import React from "react";
import { ChainsIcon, SearchIcon, SettingsIcon } from "../assets/Icons";

const TopNav = ({ sideNavOpen }) => {
  return (
    <div className="flex border-b-[1px] border-[#282a32] fixed top-0 z-10 w-full bg-[#1c1d2a]">
      <div
        className="flex h-[52px] w-[251px] items-center justify-start border-r-[1px] border-[#282a32] bg-[#161821] cursor-pointer"
        style={{ width: sideNavOpen ? "251px" : "72px" }}
      >
        <div>
          <img
            className="ml-[20px] w-[26px] py-[9px]"
            src="https://www.mintscan.io/assets/icons/cosmostation.png"
            alt=""
          />
        </div>
        {sideNavOpen && (
          <div className="py-[9px] pl-[14px] text-[16px] font-extrabold tracking-widest text-[#dde0e4]">
            MINTSCAN
          </div>
        )}
      </div>
      <div
        className={
          sideNavOpen ? "w-[calc(100vw-253px)]" : "w-[calc(100vw-72px)]"
        }
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="bg-[#1c1d2a] text-[14px] pl-[18px] font-semibold text-[#8d98a5] hover:text-[#dde0e4] font-custom1 cursor-pointer">
          Overview
        </div>
        <div className="flex items-center justify-evenly mr-4">
          <div className="flex items-center justify-between w-[216px] py-4 h-[34px] bg-[#0a131f] rounded-md border border-[#282a32] cursor-pointer hover:bg-[#141c28]">
            <div className="pl-2">
              <SearchIcon fillColor={"#94b2db"} />
            </div>
            <div className="bg-[#21324a] text-[13px] text-[#dde0e4] px-2 mr-2 rounded-sm">
              /
            </div>
          </div>
          <div className="bg-[#2d3239] p-[6px] rounded-md ml-[10px] pl-2 cursor-pointer hover:bg-[#363c45]">
            <ChainsIcon />
          </div>
          <div className="bg-[#2d3239] p-[6px] rounded-md ml-[10px] pl-2 cursor-pointer hover:bg-[#363c45]">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

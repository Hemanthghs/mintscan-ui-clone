import React from "react";

const TopNav = ({ sideNavOpen }) => {
  return (
    <div className="flex border-b-[1px] border-[#282a32] fixed top-0 z-10 w-full bg-[#1c1d2a]">
      <div
        className="flex h-[52px] w-[251px] items-center justify-start border-r-[1px] border-[#282a32] bg-[#161821]"
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
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div className="bg-[#1c1d2a] text-[14px] pl-[18px] font-semibold text-[#8d98a5] hover:text-[#dde0e4] font-custom1 cursor-pointer">
          Overview
        </div>
        <div>search</div>
      </div>
    </div>
  );
};

export default TopNav;

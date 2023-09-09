import React from "react";

const TopNav = () => {
  return (
    <div className="border-b-[1px] border-[#282a32] fixed top-0 z-10 w-full bg-[#161821]">
      <div className="flex h-[52px] w-[251px] items-center justify-start border-r-[1px] border-[#282a32]">
        <div>
          <img
            className="ml-[17px] w-[26px] py-[9px]"
            src="https://www.mintscan.io/assets/icons/cosmostation.png"
            alt=""
          />
        </div>
        <div className="py-[9px] pl-[14px] text-[16px] font-extrabold tracking-widest text-[#dde0e4]">
          MINTSCAN
        </div>
      </div>
    </div>
  );
};

export default TopNav;

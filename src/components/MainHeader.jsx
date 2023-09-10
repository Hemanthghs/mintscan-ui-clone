import React from "react";

const MainHeader = () => {
  return (
    <div className="p-9 pb-[45px] w-full border-b-[1px] border-[#282a32] font-custom1 text-white">
      <div className="flex justify-between mt-1 mr-1">
        <div className="">
          <div className="text-[33px] tracking-widest font-medium text-[#dde0e4]">
            MINTSCAN
          </div>
          <div className="text-[#98a2ae] mt-2">
            Interchain block explorer and data analytics for sovereign
            blockchain networks.
          </div>
        </div>
        <div className="p-[2px] border border-[#282a32] rounded-lg">
          <img
            className="w-[400px] h-[100px] rounded-lg"
            src="https://serve.dev-mintscan.com/__prod_static/advertisement/1685530255110-5fb37fbf-0e84-4716-bbd8-ed51b7c5a660"
            alt=""
          />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="pr-7">
          <Info title={"Chains"} value={58} />
        </div>
        <div className="border-l-[1px] border-r-[1px] px-7 border-[#282a32]">
          <Info title={"Monitoring Blocks"} value={"705,546,645"} />
        </div>
        <div className="pl-7">
          <Info title={"Monitoring TXs"} value={"2,182,318,888"} />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

const Info = ({ title, value }) => {
  return (
    <>
      <div className="text-[#98a2ae] font-semibold text-[14px]">{title}</div>
      <div className="text-[#e8eaed] text-[22px] mt-[2px] font-lato font-semibold">{value}</div>
    </>
  );
};

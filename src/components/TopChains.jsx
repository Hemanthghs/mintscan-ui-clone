import React from "react";
import {
  ArrowRightFull,
  HighlightIcon,
  ICSIcon,
  StarIcon,
  TetherIcon,
} from "../assets/Icons";

const TopChains = () => {
  return (
    <div className="bg-[#1c1d2a] flex p-2">
      <div className=" w-[470px] hover:bg-[#161821] border-[1px] hover:border-[#2d3239] border-[#1c1d2a] rounded-lg px-3 pl-4 py-3 transition duration-200 ease-out mr-6">
        <div className="flex items-center mb-3 ml-2">
          <div className="h-[14px] w-[14px]">
            <HighlightIcon />
          </div>
          <div className="text-[14px] text-[#c6cbd2] font-semibold ml-2">
            Highlighted Chains
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-1 gap-x-3">
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/cosmos.png"}
            name={"COSMOS"}
            badge={null}
          />
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/neutron.png"}
            name={"NEUTRON"}
            badge={<ICSBadge />}
          />
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/osmosis.png"}
            name={"OSMOSIS"}
            badge={null}
          />
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/archway.png"}
            name={"ARCHWAY"}
            badge={null}
          />
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/kava.png"}
            name={"KAVA"}
            badge={<TetherBadge />}
          />
        </div>
      </div>
      <div className="w-[300px] hover:bg-[#161821] border-[1px] hover:border-[#2d3239] border-[#1c1d2a] rounded-lg px-3 pl-4 py-3 transition duration-200 ease-out">
        <div className="flex items-center mb-3 ml-2">
          <div className="h-[14px] w-[14px] mt-[-2px]">
            <StarIcon />
          </div>
          <div className="text-[14px] text-[#c6cbd2] font-semibold ml-2 flex w-full items-center justify-between">
            <div>Pins [3]</div>
            <div className="h-[14px] w-[14px] mt-[-2px] cursor-pointer">
              <ArrowRightFull />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-y-1 gap-x-3">
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/cosmos.png"}
            name={"COSMOS"}
            badge={null}
          />
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/osmosis.png"}
            name={"OSMOSIS"}
            badge={null}
          />
          <NetworkItem
            logo={"https://www.mintscan.io/assets/chains/png_32/archway.png"}
            name={"ARCHWAY"}
            badge={null}
          />
        </div>
      </div>
    </div>
  );
};

export default TopChains;

const NetworkItem = ({ logo, name, badge = null }) => {
  return (
    <div className="hover:bg-[#252632] rounded-md py-2 px-3 cursor-pointer flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img className="h-[20px] w-[20px]" src={logo} alt="" />
        </div>
        <div className="ml-3 text-[#e8eaed] font-semibold">{name}</div>
      </div>
      <div>{badge}</div>
    </div>
  );
};

const TetherBadge = () => {
  return (
    <div className="flex bg-[#0e2f21] border-[1px] border-[#267d57] items-center p-1 px-[6px] rounded-[4px]">
      <div>
        <TetherIcon />
      </div>
      <div className="text-[#92ddbd] font-custom1 text-[13px] font-bold ml-[6px]">
        Tether
      </div>
    </div>
  );
};

const ICSBadge = () => {
  return (
    <div className="flex bg-[#0d2230] border-[1px] border-[#22577a] items-center p-1 px-[6px] rounded-[4px]">
      <div>
        <ICSIcon />
      </div>
      <div className="text-[#90c0e0] font-custom1 text-[13px] font-bold ml-[6px]">
        ICS
      </div>
    </div>
  );
};

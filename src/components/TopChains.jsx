import React from "react";
import { HighlightIcon, ICSIcon, TetherIcon } from "../assets/Icons";

const TopChains = () => {
  return (
    <div className="bg-[#1c1d2a]  p-2">
      <div className=" w-[470px] hover:bg-[#161821] border-[1px] hover:border-[#282a32] border-[#1c1d2a] rounded-md px-3 py-3 transition duration-200 ease-out">
        <div className="flex items-center mb-4">
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
      <div></div>
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
    <div className="flex bg-[#0e2f21] border-[1px] border-[#267d57] items-center p-1 px-[6px] rounded-md">
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
    <div className="flex bg-[#0d2230] border-[1px] border-[#22577a] items-center p-1 px-[6px] rounded-md">
      <div>
        <ICSIcon />
      </div>
      <div className="text-[#90c0e0] font-custom1 text-[13px] font-bold ml-[6px]">
        ICS
      </div>
    </div>
  );
};

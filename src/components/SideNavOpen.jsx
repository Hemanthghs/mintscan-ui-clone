import React, { useState } from "react";
import {
  ArrowUp,
  MarketIcon,
  NetworkIcon,
  GovIcon,
  IBCIcon,
  DevIcon,
  HeartBeatIcon,
  DominanceIcon,
  JourneyIcon,
  ValidatorsIcon,
  NoticeIcon,
  BlogIcon,
  ApplicationsIcon,
  ReleaseNotesIcon,
  ArrowDown,
} from "../assets/Icons";

const SideNavOpen = () => {
  const [eOpen, setEOpen] = useState(true);
  const [aOpen, setAOpen] = useState(true);
  const [vOpen, setVOpen] = useState(true);
  const [iOpen, setIOpen] = useState(true);
  return (
    <div>
      <div className="p-2 pt-3">
        <div className="mb-1 flex cursor-pointer items-center justify-between px-3 py-[13px] text-[#8d98a5] transition duration-150 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:text-[#dde0e4] hover:ease-in">
          <div className="text-[14px] font-semibold">EXPLORER</div>
          <div
            onClick={() => {
              setEOpen((x) => !x);
            }}
          >
            {eOpen ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
        <div className="border-b-[1px] border-[#282a32]"></div>
        <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 pt-[13px] pb-[10px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
          <div className="flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
            <div className="text-[14px] font-semibold">ANALYTICS</div>
            <div
              onClick={() => {
                setAOpen((x) => !x);
              }}
            >
              {aOpen ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
          {aOpen && (
            <div className="w-full mt-3">
              <CustomSideBarItem Icon={<MarketIcon />} name={"Market"} />
              <CustomSideBarItem Icon={<NetworkIcon />} name={"Network"} />
              <CustomSideBarItem Icon={<GovIcon />} name={"Governance"} />
            </div>
          )}
        </div>
        <div className="border-b-[1px] border-[#282a32]"></div>
        <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 pt-[13px] pb-[10px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
          <div className="flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
            <div className="text-[14px] font-semibold">VISUALIZATIONS</div>
            <div
              onClick={() => {
                setVOpen((x) => !x);
              }}
            >
              {vOpen ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
          {vOpen && (
            <div className="w-full mt-3">
              <CustomSideBarItem Icon={<IBCIcon />} name={"IBC Network"} />
              <CustomSideBarItem Icon={<DevIcon />} name={"Dev Activity"} />
              <CustomSideBarItem Icon={<HeartBeatIcon />} name={"Heartbeat"} />
              <CustomSideBarItem Icon={<DominanceIcon />} name={"Dominance"} />
              <CustomSideBarItem Icon={<JourneyIcon />} name={"Journey"} />
              <CustomSideBarItem
                Icon={<ValidatorsIcon />}
                name={"Validators"}
              />
            </div>
          )}
        </div>
        <div className="border-b-[1px] border-[#282a32]"></div>
        <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 pt-[13px] pb-[10px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
          <div className="flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
            <div className="text-[14px] font-semibold">INFORMATION</div>
            <div
              onClick={() => {
                setIOpen((x) => !x);
              }}
            >
              {iOpen ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
          {iOpen && (
            <div className="w-full mt-3">
              <CustomSideBarItem Icon={<NoticeIcon />} name={"Notice"} />
              <CustomSideBarItem Icon={<BlogIcon />} name={"Blog"} />
              <CustomSideBarItem Icon={<ApplicationsIcon />} name={"Applications"} />
              <CustomSideBarItem Icon={<ReleaseNotesIcon />} name={"Release Note"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNavOpen;

const CustomSideBarItem = ({ Icon, name }) => {
  return (
    <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
      <div className="h-[18px] w-[18px]">{Icon}</div>
      <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
        {name}
      </div>
    </div>
  );
};

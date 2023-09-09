import React from "react";
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
} from "../assets/Icons";

const SideNavClosed = () => {
  return (
    <div>
      <div className="p-2 pt-3">
        <div className="mb-1 flex cursor-pointer items-center justify-between px-3 py-[8px] text-[#8d98a5] transition duration-150 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:text-[#dde0e4] hover:ease-in">
        </div>
        <div className="border-b-[1px] border-[#282a32]"></div>
        <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <MarketIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <NetworkIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <GovIcon />
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-[#282a32]"></div>
        <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <IBCIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <DevIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <HeartBeatIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <DominanceIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <JourneyIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <ValidatorsIcon />
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-[#282a32]"></div>
        <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <NoticeIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <BlogIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <ApplicationsIcon />
            </div>
          </div>
          <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
            <div className="h-[18px] w-[18px]">
              <ReleaseNotesIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavClosed;

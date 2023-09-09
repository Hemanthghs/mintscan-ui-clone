import React from "react";
import {
  ArrowUp,
  ArrowLeft,
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

const SideNav = () => {
  return (
    <>
      <div>
        <div className=" flex h-[calc(100vh-51px)] w-[251px] flex-col justify-between border-r-[1px] border-[#282a32] bg-[#161821] overflow-hidden">
          <div>
            <div className="p-2 pt-3">
              <div className="mb-1 flex cursor-pointer items-center justify-between px-3 py-[13px] text-[#8d98a5] transition duration-150 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:text-[#dde0e4] hover:ease-in">
                <div className="text-[14px] font-semibold">EXPLORER</div>
                <div>
                  <ArrowUp />
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">ANALYTICS</div>
                  <div>
                    <ArrowUp />
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <MarketIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Market
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <NetworkIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Network
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <GovIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Governance
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">
                    VISUALIZATIONS
                  </div>
                  <div>
                    <ArrowUp />
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <IBCIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    IBC Network
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <DevIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Dev Activity
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <HeartBeatIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Heartbeat
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <DominanceIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Dominance
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <JourneyIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Journey
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <ValidatorsIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Validators
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">INFORMATION</div>
                  <div>
                    <ArrowUp />
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <NoticeIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Notice
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <BlogIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Blog
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <ApplicationsIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Applications
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <ReleaseNotesIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Release Note
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[52px] items-center justify-end border-t-[1px] border-[#282a32]">
            <ArrowLeft />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

import React, { useState } from "react";
import SideNavOpen from "./SideNavOpen";
import { ArrowLeft, ArrowRight } from "../assets/Icons";
import SideNavClosed from "./SideNavClosed";

const SideNav = ({sideNavOpen, setSideNavOpen}) => {
  return (
    <>
      {sideNavOpen ? (
        <div className="fixed left-0 flex h-[calc(100vh-51px)] w-[251px] flex-col justify-between border-r-[1px] border-[#282a32] bg-[#161821] overflow-hidden">
          <SideNavOpen />
          <div className="flex h-[52px] items-center justify-end border-t-[1px] border-[#282a32]">
            <span
              onClick={() => {
                setSideNavOpen(false);
              }}
              className="mr-4"
            >
              <ArrowLeft />
            </span>
          </div>
        </div>
      ) : (
        <div className="fixed left-0 flex h-[calc(100vh-51px)] w-[72px] flex-col justify-between items-center border-r-[1px] border-[#282a32] bg-[#161821] overflow-hidden">
          <SideNavClosed />
          <div className="flex h-[52px] w-full items-center justify-center border-t-[1px] border-[#282a32]">
            <span
              onClick={() => {
                setSideNavOpen(true);
              }}
            >
              <ArrowRight />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;

import React, { useState } from "react";
import { ChainsIcon, SearchIcon, SettingsIcon } from "../assets/Icons";
import { Dialog, DialogContent } from "@mui/material";
import TopChains from "./TopChains";
import { Chains } from "../utils";

const TopNav = ({ sideNavOpen }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex border-b-[1px] border-[#2d3239] fixed top-0 z-10 w-full bg-[#1c1d2a]">
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
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="flex items-center justify-between w-[216px] py-4 h-[34px] bg-[#0a131f] rounded-md border border-[#282a32] cursor-pointer hover:bg-[#141c28]"
          >
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
      <div>
        <SearchDialog open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default TopNav;

const SearchDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth className="blur-effect">
      <DialogContent className="p-0 w-[1435px]  bg-[#161821]">
        <div className="flex items-center justify-between w-full py-4 h-[54px] bg-[#1c1d2a] rounded-t-md border-2 border-[#3d70b8] cursor-text hover:bg-[#0b1420]">
          <div className="pl-5 flex items-center w-full">
            <span>
              <SearchIcon fillColor={"#94b2db"} />
            </span>
            <input
              className="pl-2 w-full border-none focus:outline-none bg-transparent placeholder:font-custom1 placeholder:text-[14px] placeholder:font-medium placeholder:text-[#3d70b8] text-[#e8eaed]"
              type="text"
              placeholder="Search by Chain, Address, Validator, and TxHash"
            />
          </div>
          <div className="bg-[#21324a] text-[12px] text-[#94b2db] px-2 mr-4 rounded-[6px] py-1">
            ESC
          </div>
        </div>
        <div className="h-[796px] overflow-y-scroll">
          <TopChains />
          <div className="pl-7 pt-4 pb-3">
            <span className="text-[17px] font-semibold text-[#dde0e4]">
              Chains
            </span>
            <span className="text-[17px] font-semibold text-[#8d98a5] ml-[10px]">
              58
            </span>
          </div>
          <div className="px-6 grid grid-cols-4 mb-8">
            {[1, 1, 1, 1, 1].map(() => (
              <>
                {Chains.map((chain, index) => (
                  <div className="border-b-[1px] border-[#1c1d2a] py-1 pl-1">
                    <ChainName
                      key={index}
                      logo={chain.logo}
                      name={chain.name}
                      chainID={chain.chainID}
                    />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ChainName = ({ logo, name, chainID }) => {
  return (
    <div className="flex items-center py-3 w-[334px] rounded-md border-[1px] border-transparent hover:border-[#2d3239] px-4 pb-3 cursor-pointer hover:bg-[#1c1d2a]">
      <img className="h-[28px] w-[28px] mt-1" src={logo} alt={name + " logo"} />
      <div className="ml-5">
        <div className="text-[#e8eaed] text-[15px] font-semibold">{name}</div>
        <div className="text-[#98a2ae] text-[13px] font-medium leading-4">
          {chainID}
        </div>
      </div>
    </div>
  );
};

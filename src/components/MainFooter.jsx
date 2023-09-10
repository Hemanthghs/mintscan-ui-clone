import React from "react";
import {
  CosmostationIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "../assets/Icons";

const MainFooter = () => {
  return (
    <div className="p-9 pb-[45px] w-full border-b-[1px] border-[#2d3239] text-white">
      <div className="flex justify-between mt-1 mr-1">
        <div className="">
          <div className="text-[26px] tracking-widest font-semibold text-[#afb7c0]">
            MINTSCAN
          </div>
          <div className="text-[#636f7e] text-[16px]">
            Powered by Cosmostation
          </div>
          <div className="text-[#636f7e] text-[16px] mt-8 w-[800px]">
            Cosmostation provides partner networks with protocol infrastructure
            legos vital to scaling and onboarding users. Supercharge your
            protocol with smart crypto infrastructure.
          </div>
        </div>
        <div className="p-1 px-3 flex items-center rounded-2xl bg-[#1d9bf0] h-fit cursor-pointer hover:opacity-90">
          <span>
            <TwitterIcon width={18} height={18} />
          </span>
          <span className="text-[13px] ml-1">Tweet</span>
        </div>
      </div>
      <div className="h-16"></div>
      <div className="flex">
        <div className="pr-7 border-r-[1px] py-1 border-[#32343c]">
          <Links
            title={"Cosmostation"}
            icon={<CosmostationIcon width={18} height={18} />}
          />
        </div>
        <div className="border-r-[1px] px-9 py-1 border-[#32343c]">
          <Links
            title={"Twitter"}
            icon={<TwitterIcon width={18} height={18} />}
          />
        </div>
        <div className="pl-7 border-r-[1px] px-9 py-1 border-[#32343c]">
          <Links
            title={"Telegram"}
            icon={<TelegramIcon width={18} height={18} />}
          />
        </div>
        <div className="pl-7 border-r-[1px] px-9 py-1 border-[#32343c]">
          <Links
            title={"Medium"}
            icon={<MediumIcon width={18} height={18} />}
          />
        </div>
        <div className="pl-7 py-1">
          <Links
            title={"Github"}
            icon={<GithubIcon width={18} height={18} />}
          />
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default MainFooter;

const Links = ({ title, icon }) => {
  return (
    <>
      <div className="text-[#828791] hover:text-[#afb7c0] flex cursor-pointer">
        <span>{icon}</span>
        <span className="text-[14px] ml-3 font-semibold">{title}</span>
      </div>
    </>
  );
};

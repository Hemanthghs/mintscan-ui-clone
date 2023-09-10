import React from "react";
import { SearchIcon } from "../assets/Icons";
import ChainsDataTable from "./ChainsDataTable";

const ChainsData = ({ sideNavOpen }) => {
  return (
    <div className="p-8 pb-16 border-b-[1px] border-[#2d3239]">
      <div className="pt-4 pb-3">
        <span className="font-custom1 text-[20px] font-medium text-[#dde0e4]">
          Chains
        </span>
        <span className="font-custom1 text-[20px] font-medium text-[#8d98a5] ml-[10px]">
          58
        </span>
      </div>
      <div className="flex items-center">
        <div>
          <FilterItem name={"USD"} active={true} />
          <FilterItem name={"BTC"} />
        </div>
        <div className="mx-8">
          <FilterItem name={"24H"} active={true} />
          <FilterItem name={"7D"} />
          <FilterItem name={"30D"} />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="mt-10 cursor-pointer">
        <ChainsDataTable sideNavOpen={sideNavOpen} />
      </div>
    </div>
  );
};

export default ChainsData;

const FilterItem = ({ name, active }) => {
  return (
    <>
      <span
        className="text-[11px] text-[#f4f5f6] font-semibold px-[10px] py-1 rounded-[4px]"
        style={{
          backgroundColor: active ? "#363c45" : "",
          color: active ? "#f4f5f6" : "#818d9c",
          cursor: "pointer",
        }}
      >
        {name}
      </span>
    </>
  );
};

const SearchBar = () => {
  return (
    <div className="flex bg-[#1c1d2a] items-center px-2 py-1 rounded-md hover:bg-[#2d3239]">
      <span>
        <SearchIcon fillColor={"#6c7989"} />
      </span>
      <input
        className="pl-2 border-none cursor-pointer focus:outline-none bg-transparent placeholder:font-custom1 placeholder:text-[14px] placeholder:font-medium placeholder:text-[#757575] text-[#e8eaed]"
        type="text"
        placeholder="Search Chain"
      />
    </div>
  );
};

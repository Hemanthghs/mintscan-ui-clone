import React from "react";
import { ArrowSolidDown, ArrowSolidUp, StarIcon } from "../assets/Icons";

const ChainsDataTable = () => {
  const chains = [
    {
      name: "AKASH",
      logo: "https://www.mintscan.io/assets/chains/svg/akash.svg",
      token: "AKT",
    },
    {
      name: "JUNO",
      logo: "https://www.mintscan.io/assets/chains/svg/juno.svg",
      token: "JUNO",
    },
    {
      name: "IRIS",
      logo: "https://www.mintscan.io/assets/chains/svg/iris.svg",
      token: "IRIS",
    },
    {
      name: "COSMOS",
      logo: "https://www.mintscan.io/assets/chains/svg/cosmos.svg",
      token: "ATOM",
    },
    {
      name: "DESMOS",
      logo: "https://www.mintscan.io/assets/chains/svg/desmos.svg",
      token: "DSM",
    },
    {
      name: "EVMOS",
      logo: "https://www.mintscan.io/assets/chains/svg/evmos.svg",
      token: "EVMOS",
    },
    {
      name: "NEUTRON",
      logo: "https://www.mintscan.io/assets/chains/svg/neutron.svg",
      token: "NTRN",
    },
    {
      name: "REGEN",
      logo: "https://www.mintscan.io/assets/chains/svg/regen.svg",
      token: "REGEN",
    },
    {
      name: "STARGAZE",
      logo: "https://www.mintscan.io/assets/chains/svg/stargaze.svg",
      token: "STARS",
    },
    {
      name: "UMEE",
      logo: "https://www.mintscan.io/assets/chains/svg/umee.svg",
      token: "UMEE",
    },
  ];
  return (
    <div className="flex">
      <table class="table-auto">
        <thead className="border-b-[1px] border-[#2d3239]">
          <tr>
            <th className="pl-2">
              <ColHeader title={"Pins"} />
            </th>
            <th>
              <ColHeader title={"Chain"} />
            </th>
          </tr>
        </thead>
        <tbody>
          {chains.map((chain, index) => (
            <tr key={index} className="hover:bg-[#1c1d2a]">
              <td>
                <div className="flex items-center justify-center py-2">
                  <StarIcon height={15} width={15} />
                </div>
              </td>
              <td>
                <ChainName
                  logo={chain.logo}
                  name={chain.name}
                  token={chain.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChainsDataTable;

const ColHeader = ({ title }) => {
  return (
    <div className="flex items-center mb-2 text-[#8d98a5] hover:text-white justify-center">
      <div className=" font-semibold text-[14px]">{title}</div>
      <div className="mt-[-2px] pl-1">
        <div className="mb-[-12px]">
          <ArrowSolidUp />
        </div>
        <div>
          <ArrowSolidDown />
        </div>
      </div>
    </div>
  );
};

const ChainName = ({ logo, name, token }) => {
  return (
    <div className="flex items-center w-[225px] py-2">
      <img className="h-[26px] w-[26px] mt-1" src={logo} alt={name + " logo"} />
      <div className="ml-5">
        <div className="text-[#e8eaed] text-[15px] font-semibold font-custom1">
          {name}
        </div>
        <div className="text-[#98a2ae] text-[13px] font-medium font-custom1 leading-4">
          {token}
        </div>
      </div>
    </div>
  );
};

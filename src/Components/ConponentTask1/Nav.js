import React, { useState } from "react";
import {
  HiOutlineMail,
  HiBell,
  HiChevronDown,
  HiPlusCircle,
} from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Nav = () => {
  let Name = "Daniyal";
  const [open, setopen] = useState(false);
  // const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="flex justify-between p-3 bg-white rounded-t-xl sticky top-0">
        <h1 className="font-black font-sans text-2xl cursor-pointer hidden md:flex">
          CV Maker
        </h1>
        <div className="md:hidden flex">
          <button onClick={() => setopen(!open)}>
            <AiOutlineMenu />
          </button>
          <h1 className="font-black font-sans text-2xl cursor-pointer ml-6">
            CV Maker
          </h1>
        </div>
        {/* <div> */}

        <div className="hidden md:flex">
          <div className="self-center">
            <ul className="flex">
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Home
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 text-red-600 ">
                Job Finder
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Application
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Statistics
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Mini Sites
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex ">
          <button className="bg-red-600 p-1 px-4 text-white rounded-full hover:bg-red-500 flex">
            <span className="self-center mr-1">
              <HiPlusCircle />
            </span>
            Upgrade
          </button>
          <div className="flex self-center mx-2">
            <span className="bg-[#E0E0E0] w-6 h-6 rounded-full flex justify-center items-center mx-1 cursor-pointer">
              <HiOutlineMail className="text-[#5C5C5C]" />
            </span>
            <span className="bg-[#E0E0E0] w-6 h-6 rounded-full flex justify-center items-center mx-1 cursor-pointer">
              <HiBell className="text-[#5C5C5C]" />
            </span>
          </div>
          <div>
            <img />
          </div>
          <div className="flex justify-center p-1">
            <h1 className="font-semibold ">{Name}</h1>
            <span className="p-1 mt-[2px]">
              <HiChevronDown className="cursor-pointer" />
            </span>
          </div>
        </div>
      </nav>
      <section className="">
        <div
          className={`fixed inset-y-0 left-0 top-14 w-64 bg-slate-100 px-8 py-4 transition-transform ease-in-out duration-300 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="font-black font-sans text-2xl cursor-pointer">
            CV Maker
          </h1>
          <div className="w-full h-full flex">
            <ul className=" flex flex-col justify-evenly py-5">
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Home
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 text-red-600 ">
                Job Finder
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Application
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Statistics
              </li>
              <li className="font-semibold mx-4 cursor-pointer hover:text-blue-900 ">
                Mini Sites
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;

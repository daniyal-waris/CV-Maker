import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { AiFillQuestionCircle } from "react-icons/ai";

const Bodybtn = () => {
  return (
    <>
      <div className="md:flex md:justify-between  md:flex-row flex flex-col mt-5 md:h-auto h-[30vh] justify-between">
        <div className=" md:h-auto h-2/3 flex flex-col justify-between md:block">
          <button className=" bg-[#E0E0E0] p-1 px-4 text-sm rounded-full hover:bg-slate-300 ">
            Job Type
            <span className="float-right mt-1 mx-1">
              <HiChevronDown />
            </span>
          </button>
          <button className=" bg-[#E0E0E0] ml-3 text-sm p-1 px-4 rounded-full hover:bg-slate-300 ">
            Salaries
            <span className="float-right mt-1 mx-1">
              <HiChevronDown />
            </span>
          </button>
          <button className=" bg-[#E0E0E0] ml-3  text-sm  p-1 px-4 rounded-full hover:bg-slate-300">
            posted Time
            <span className="float-right mt-1 mx-1">
              <HiChevronDown />
            </span>
          </button>
        </div>
        <div className="flex justify-center items-center md:h-auto h-1/3">
          <h1 className="mr-4 font-sans font-medium">Your Matching CV:</h1>
          <button className="bg-[#E0E0E0] p-1 px-4 rounded-full text-sm">
            Daniyal's CV
            <span className="float-right mt-1 ml-1">
              <HiChevronDown />
            </span>
          </button>
          <AiFillQuestionCircle className="ml-2 cursor-pointer"/>
        </div>
      </div>
    </>
  );
};

export default Bodybtn;

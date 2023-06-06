import React from "react";
import { AiOutlineSearch  } from "react-icons/ai";
import { CiLocationOn  } from "react-icons/ci";


const Hero = () => {
  let dummy = " ";
  return (
    <header>
      <div className="">
        <div className="flex justify-start p-1">
          <h1 className="mx-4 font-sans font-black text-xs md:text-3xl mb-5">MY CV's</h1>
          <h1 className="mx-4 font-sans font-black text-xs md:text-3xl text-slate-400 mb-5">For You</h1>
          <h1 className="mx-4 font-sans font-black text-xs md:text-3xl text-slate-400 mb-5">Saved</h1>
        </div>
        <div className="md:flex md:justify-between sm:border-1 border-blue-200">
          <span className="flex p-2">
            <AiOutlineSearch className="mt-1 mr-1 text-slate-500"/>
            <input
              type="text"
              name="text"
              placeholder="Search by job title"
              className="focus:border-none inline-block border-none"
              autoComplete="off"

            />
          </span>
          <span className="flex p-2">
            <CiLocationOn className="mt-1 mr-1 cursor-pointer text-slate-500"/>
            <h1 className="cursor-pointer text-slate-500">Choose LocationOn</h1>
          </span>
          <button className="bg-[#E0E0E0] px-4 rounded-full text-slate-400 mr-1">Search</button>
        </div>
        <div className="md:w-full md:border-b-2 h-1 rounded-full md:border-slate-400"></div>
      </div>
    </header>
  );
};

export default Hero;

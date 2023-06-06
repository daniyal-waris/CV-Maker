import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";

const Card2 = () => {
  let Matching = 96;
  let skill = 8;
  let keywords = 4;
  let certificate = 5;
  return (
    <>
      <div className="flex border-2 mt-1 ml-5 bg-[#EFEFEF]">
        <div className="flex flex-col w-1/3 justify-center items-center py-3 bg-white">
          <div className="h-16 w-16 bg-green-200 rounded-full flex justify-center items-center mt-2">
            <h1 className="font-medium">{Matching}</h1>
          </div>
          <h1 className="font-semibold text-xs mt-1">Great Matching</h1>
          <button className="bg-red-500 px-3 py-1 text-sm rounded-full hover:bg-red-600 text-white mt-3">
            Import CV
          </button>
        </div>

        <div className="pl-2">
          <h1 className="font-bold mb-2 mt-2 ">How well is your CV Matching?</h1>
          <div className="mt-5">
            <span>
              <GrStatusGood className="float-left mt-1 mr-2" />
            </span>
            <h1>
              <strong>{skill}/10</strong> skill matching
            </h1>
          </div>
          <span>
            <RxCrossCircled className="float-left mt-1 mr-2" />
          </span>
          <h1>
            <strong>{keywords}/10</strong> skill matching
          </h1>
          <span>
            <RxCrossCircled className="float-left mt-1 mr-2" />
          </span>
          <h1>
            <strong>{certificate}/10</strong> skill matching
          </h1>
        </div>
        <div className="self-center ml-5">
          <img
            className="w-20 "
            src="https://d.novoresume.com/images/doc/creative-cv-template.png"
          />
        </div>
      </div>
    </>
  );
};

export default Card2;

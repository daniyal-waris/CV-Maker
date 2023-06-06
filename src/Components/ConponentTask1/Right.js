import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiSaveDown1 } from "react-icons/ci";

const Right = () => {
  let golive =
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/1280px-JD_Sports_logo.svg.png";
  let days = "10";
  let numb = "910";
  return (
    <>
      <div className="mt-5 ml-5 p-5 border-2 h-48 overflow-hidden">
        <div>
          <h1 className="font-bold text-2xl">
            Office Assistance / Social Media Assistance
          </h1>
        </div>
        <div>
          <div className="flex mt-5">
            <img src={golive} className="w-4 h-4 rounded-full mt-1 mr-2" />
            <h1>Jd London Uk {days} days</h1>
            <AiFillStar className="mt-1 ml-1 text-red-600" />
          </div>
          <div className="flex justify-between mt-5">
            <div className="">
              <button className="p-1 px-4 text-white bg-red-600 rounded-3xl hover:bg-red-500 mr-3 text-sm">Apply</button>
              <button className="p-1 px-4  bg-[#E0E0E0] rounded-3xl hover:bg-slate-200 text-sm">Customize CV & Apply</button>
            </div>
            <div className="flex">
              <button className=" px-2 bg-green-200 rounded-3xl hover:bg-green-300 text-sm"> <strong>{numb}</strong> Great Match</button>
              <CiSaveDown1 className="mt-1 mx-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;

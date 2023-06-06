import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
const Card = (props) => {

  return (
    <>
      <div className="mt-5 ml-1 ">
        <div className="flex justify-between">
          <h1 className="font-bold">
            {props.tagline}
          </h1>
          <div className="w-8 h-8 bg-green-200 flex justify-center items-center rounded-full">
            <h1>{props.score}</h1>
          </div>
        </div>
        <div className="flex">
          <img
            className="mr-5 mt-1 rounded-full overflow-hidden"
            src={props.src}
          />
          <h1>{props.city}</h1>
        </div>
        <div className="mt-4">
          <p>
            {props.content}
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex">
            <AiFillStar className="mt-1 mr-2" />
            <h1>Recommanded for {props.days} days</h1>
          </div>
          <div className="flex">
            <h1>Saved</h1>
            <CiSaveDown2 className="mt-1 ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

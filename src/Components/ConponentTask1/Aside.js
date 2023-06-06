import React from "react";
import { AiOutlineBars, AiFillStar } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import Card from "./Card";

const Aside = () => {
  let jobs = "2,121";

  return (
    <>
      <div className="md:w-2/5 flex flex-col w-full">
        <div className="flex mt-10 justify-between ">
          <div className="flex ">
            <AiOutlineBars className="mt-1 mx-2" />
            <h1 className="font-medium cursor-pointer">Most Recent</h1>
            <HiChevronDown className="cursor-pointer mt-1 ml-1" />
          </div>
          <h1 className="text-slate-500 ">Showing {jobs} jobs</h1>
        </div>
        <div className="p1 overflow-scroll h-96">
          <Card
            tagline="Office assistance / Social Media Assistance"
            score="98"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F317752%2Ffacebook_social_media_social_icon&psig=AOvVaw1JFVjSX-wBkPkjwIVdA77s&ust=1686040243137000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICan9Pbq_8CFQAAAAAdAAAAABAY"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            days="10"
            city="JD  . London UK"
          />

          <Card
            tagline="Office assistance / Social Media Assistance"
            score="98"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F317752%2Ffacebook_social_media_social_icon&psig=AOvVaw1JFVjSX-wBkPkjwIVdA77s&ust=1686040243137000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICan9Pbq_8CFQAAAAAdAAAAABAY"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            days="10"
            city="JD  . London UK"
          />
          <Card
            tagline="Office assistance / Social Media Assistance"
            score="98"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F317752%2Ffacebook_social_media_social_icon&psig=AOvVaw1JFVjSX-wBkPkjwIVdA77s&ust=1686040243137000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICan9Pbq_8CFQAAAAAdAAAAABAY"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            days="10"
            city="JD  . London UK"
          />
          <Card
            tagline="Office assistance / Social Media Assistance"
            score="98"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F317752%2Ffacebook_social_media_social_icon&psig=AOvVaw1JFVjSX-wBkPkjwIVdA77s&ust=1686040243137000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICan9Pbq_8CFQAAAAAdAAAAABAY"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            days="10"
            city="JD  . London UK"
          />
        </div>
      </div>
    </>
  );
};

export default Aside;

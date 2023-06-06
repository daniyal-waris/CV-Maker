import React from "react";
import Nav from "./ConponentTask1/Nav";
import Hero from "./ConponentTask1/Hero";
import Bodybtn from "./ConponentTask1/Bodybtn";
import Aside from "./ConponentTask1/Aside";
import Right from "./ConponentTask1/Right";
import Card2 from "./ConponentTask1/Card2";

const Task1 = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="w-4/5 m-auto mt-10 bg-[#F0F0F0]">
          <Hero />
          <Bodybtn />
          <div className=" md:flex">
            <Aside />
            <div className="flex flex-col">
              <Right />
              <Card2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task1;

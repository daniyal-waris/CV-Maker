import React from "react";

const Cardtailwind = () => {
  return (
    <>
      <div className="w-screen h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-1/4 h-2/6 bg-slate-400 p-2">
          <img src="./Img/UnitedStates.jpg" className="w-full h-1/2" />
          <div className="mt-1 h-1/2 overflow-auto">
            <h1 className="text-3xl">My Responsive Card</h1>
            <p className="">This Card is designed with the help of Tailwind and it is Responsive</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardtailwind;

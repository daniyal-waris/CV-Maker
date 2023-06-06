import React from "react";

const Nav = () => {
  return (
    <>
      <div className="flex w-full">
      <img src="./Img/logo.png" className="w-28 p-2 m-3" />
        <ul className="flex space-x-5  py-3 ml-24 mt-3 cursor-pointer" >
            <li className="hover:text-lg">Insight</li>
            <li className="hover:text-lg">Services</li>
            <li className="hover:text-lg">Industries</li>
            <li className="hover:text-lg">Careers</li>
            <li className="hover:text-lg">About Accenture</li>
        </ul>
        <img src="./Img/Unitedstates.jpg" className="w-8 h-5 ml-96 mt-5 cursor-pointer"/>
      </div>
    </>
  );
};

export default Nav;

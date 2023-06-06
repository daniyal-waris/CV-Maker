import React from "react";

const Rcard = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="max-w-sm bg-slate-400 mx-auto rounded-xl overflow-hidden ">
          <div className="md:flex">
            <div className="">
              <img
                className="h-48 w-full object-cover md:h-full md:w-40"
                src="https://images.pexels.com/photos/16972096/pexels-photo-16972096/free-photo-of-perro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
            <div className="p-2 text-white">
              <h1>This is a responsive Design</h1>
              <a
                href="https://nerdcave.com/tailwind-cheat-sheet"
                className="hover:text-blue-500"
              >
                Tailwind CSS
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcard;

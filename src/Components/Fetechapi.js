import React, { useState, useEffect } from "react";

const Fetechapi = () => {
  const [user, setuser] = useState([]);

  const getuser = async () => {
    const response = await fetch("https://api.github.com/users");
    setuser(await response.json());
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      {user.map((val) => {
        return (
          <>
            <div className="bg-gray-800 flex flex-row justify-center">
                <div className=""> 
                <div className=" flex flex-col w-96 mt-10 bg-slate-200 p-2">
                  <img src={val.avatar_url} alt="Api Image" />
                  <h1 className="font-bold">Name:</h1>
                  <p>{val.login}</p>
                  <h1 className="font-bold">ID:</h1>
                  <h1>{val.node_id}</h1>
                  <h1 className="font-bold">Followers Ur:</h1>
                  <h1>{val.followers_url}</h1>
                  </div>
                </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Fetechapi;

import React, { useState } from "react";
import {
  RiNotification4Fill,
  RiMoonFill,
  RiAdminLine,
  RiClapperboardFill,
} from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Clock from "./Clock";
import Date from "./Dates";

function Navbar() {
  const [user, setUser] = useState(false);

  const userToggleHandler = () => {
    setUser(!user);
  };

  return (
    <div>
      <div className="flex bg-blue-400 h-14 md:h-16 justify-between max-w-[1920px] items-center p-2">
        <h2 className="text-xl ml-[9px] text-white">Dashboard</h2>
        <div className="flex mr-2 p-2">
          <div className="text-slate-800 text-xs bg-slate-300 items-center justify-center p-0.5 rounded-sm flex mr-3">
            <span className="mr-1">
              <Clock />
            </span>
            <span>
              <Date />
            </span>
          </div>
          <RiNotification4Fill className="mr-2" size={20} color="white" />
          <RiMoonFill className="mr-2" size={20} color="white" />
          <RiClapperboardFill className="mr-2" size={20} color="white" />
          <div className="flex items-center ml-1">
            <RiAdminLine
              className="mr-1 cursor-pointer"
              size={20}
              color="white"
            />
            <span className="text-gray-300 text-md font-mono">Admin</span>
            <AiFillCaretDown
              size={16}
              color="white"
              onClick={userToggleHandler}
            />
          </div>
        </div>
      </div>
      {user && (
        <div className="absolute right-4 top-12">
          <div className="flex flex-col justify-around bg-slate-600 w-52 h-80 shadow-sm">
            <div className="flex flex-col ml-4">
              <span>Username:</span>
              <span>Email:</span>
            </div>
            <Link to="/login">
              <button className="bg-red-300 w-16 h-8 ml-4">Logout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

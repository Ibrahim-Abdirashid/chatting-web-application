import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const currenUser = false;
  return (
    <div className="shadow-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      {/* loogadii weye halkan */}
      <div className="w-20 cursor-pointer">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>

      {/* halkana waa navigationki */}
      <ul className="flex gap-5 font-medium text-base">
        {currenUser && (
          <li>
            <Link to="/">Chatting</Link>
          </li>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex -ml-5">
        {!currenUser ? (
          <li className="list-none">
            <Link
              to="/login"
              className="text-base bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </li>
        ) : (
          <li className="list-none">
            <Link
              to="/signup"
              className="text-base bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Logout
            </Link>
            </li>
        )}
      </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const currenUser = false;
  return (
    <div className="shadow-sm ">
    <div className="fixed top-0 right-0 left-0 max-w-6xl mx-auto flex justify-between items-center">
      {/* loogadii weye halkan */}
      <div className=" cursor-pointer ">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-24" />
          <p className="" onClick={() => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
          }}>Abraham's Chatt</p>
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
          <Link to="/#about" onClick={() => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}>About</Link>
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

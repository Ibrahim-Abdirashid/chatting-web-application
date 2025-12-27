import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-500">
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-5 items-center   gap-10">
        {/* divka logada */}
        <div>
          <Link to="/">
            <img src="./foterlogo.png" alt="" />
          </Link>
        </div>
        {/* about */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-bold mb-4">About Us</h2>
          <div className="flex flex-col space-y-2">
            <p>Our Team</p>
            <p>Sponsors</p>
          </div>
        </div>
        {/* Features */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-bold mb-4">Features</h2>
          <div className="flex flex-col space-y-2">
            <p>Real Chat</p>
            <p>Connect Friends</p>
          </div>
        </div>
        {/* policy */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-bold mb-4">Policy</h2>
          <div className="flex flex-col space-y-2">
            <p >Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        {/* How to Reachme */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">How to Reach Us</h2>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://github.com/ibrahim-abdirashid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ibrahim-abdirashid-3803a9233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

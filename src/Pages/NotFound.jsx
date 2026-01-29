import React from "react";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="container h-screen mx-auto py-8">
        <div className="text-center flex flex-col justify-center items-center h-full">
          <h1 className="text-8xl font-bold text-red-500">404</h1>
          <h3 className="text-2xl font-semibold mt-4">Not Found</h3>
          <p className="mt-2 text-gray-600">The resource requested could not be found on this server</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

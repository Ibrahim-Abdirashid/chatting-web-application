import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // React Hook Form: Uma baahnid useState-ka email iyo password
  const {
    register,
    handleSubmit,
  } = useForm();

  // Data waxay ka kooban tahay { email, password }
  const onSubmit = () => {
    navigate('/SomeChat');
  };

  return (
    <>

    <NavBar />
    
    <div className="py-28 max-w-6xl mx-auto h-screen flex flex-col justify-center items-center gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-10 border border-green-500 rounded-md shadow-md min-w-[350px]"
      >
        <h3 className="text-center font-bold text-green-500 text-xl uppercase">
          Login User
        </h3>

        {/* Email Input */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("email")}
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("password")}
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-md transition-colors"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 hover:underline">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;

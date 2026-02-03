import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch, // Waxaan u isticmaalaynaa inaan ku akhrino password-ka hore
    formState: { errors },
  } = useForm();

  // Watch password si aan u barbar dhigno Confirm Password
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      // 1. Create User
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);

      // 2. Update Profile with Full Name
      await updateProfile(res.user, {
        displayName: data.fullName,
      });

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="py-20 max-w-6xl mx-auto min-h-screen flex flex-col justify-center items-center gap-10 mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-10 border border-green-500 rounded-md shadow-md min-w-[380px] bg-white"
        >
          <h3 className="text-center font-bold text-green-500 text-2xl uppercase mb-4">
            Create Account
          </h3>

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Abraham Razhid"
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              {...register("fullName", { required: " fadlan Magacaaga oo saddexan qor" })}
            />
            {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
              {...register("email", {
                required: "fadlan Email waa inaad galisaa",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email-ku ma saxna"
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Password</label>
            <input
              type="password"
              placeholder="********"
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.password ? "border-red-500" : "border-gray-300"
                }`}
              {...register("password", {
                required: "fadlan password-ka geli",
                minLength: { value: 8, message: "Ugu yaraan waa inuu noqdaa password-ku 8 xaraf" }
              })}
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              {...register("confirmPassword", {
                required: "Fadlan ku celi password-ka",
                validate: (value) => value === password || "Password-adu isma laha"
              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition-all mt-2"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 font-bold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
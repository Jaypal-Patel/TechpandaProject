import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 w-full h-full md:h-svh flex justify-center items-center mt-[70px] md:mt-[80px] ">
      <div className="w-[300px] md:w-[400px] bg-white shadow-lg rounded-lg p-5 md:p-8 my-10 md:my-0">
        <h2 className="text-center text-3xl font-bold mb-5">Login</h2>
        <form>
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              className="w-full mb-2 border focus:outline-none focus:ring-2 focus:ring-gray-500 py-2 px-2 rounded-md "
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              className="w-full mb-6 border focus:outline-none focus:ring-2 focus:ring-gray-500 py-2 px-2 rounded-md"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#005CE6] text-white text-lg font-semibold py-2 px-6 rounded-lg">
              Login
            </button>
          </div>
          <p className="text-sm mt-3 text-center font-medium">
            Forgot{" "}
            <a className="text-blue-600" href="#">
              Username
            </a>{" "}
            /{" "}
            <a className="text-blue-600" href="#">
              Password
            </a>{" "}
            ?
          </p>
          <p className="text-sm text-center font-medium">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-600">
              Sing Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

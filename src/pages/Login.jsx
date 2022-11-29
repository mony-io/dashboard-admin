import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.jpg"

const Login = () => {
  return (
    <section className="bg-[#EFF5F5] h-auto">
      <div className="flex justify-between h-16 w-full bg-slate-200 shadow">
        <img src={logo} alt="logo" className="object-cover ml-6" /> 
        <img src={logo2} alt="logo-ssk" className="object-cover rounded-[100%] w-14 mt-1 h-14" />
      <span className="text-2xl mt-4 mr-6 font-semibold text-gray-900 dark:text-slate-600">
        K.S.S Home Construction
      </span>
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-[#F7F7F7] rounded-lg md:mt-0 sm:max-w-md sm:p-8 shadow-2xl">
          <h2 className="mb-1 text-xl font-bold leading-tight text-center tracking-tight md:text-2xl text-slate-600">
            Login
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-slate-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 outline-none text-slate-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-slate-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 outline-none sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-slate-600 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                required=""
              />
            </div>
            <Link to="/resetpassword">
              <p className="text-gray-400 underline text-xs pt-2 mt-4 mb-4">
                Reset-Password
              </p>
            </Link>
            <Link to="/">
              <button
                type="submit"
                className="w-full mt-3 bg-slate-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

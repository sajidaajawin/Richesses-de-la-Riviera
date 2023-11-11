import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    function check(){
        if(window.localStorage.getItem('token')){
            console.log("S");
            return true;
        }else {
            return false;
        }
    }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        {/* <!-- lg+ --> */}
        <div class="bg-[#C08261]  ">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between h-16 lg:h-24 ">
              <div class="hidden lg:flex lg:items-center lg:space-x-10 ">
                <Link to="/" title="" class="text-base font-medium text-white">
                  {" "}
                  Home{" "}
                </Link>

                <Link
                  to="/AllProducts"
                  title=""
                  class="text-base font-medium text-white"
                >
                  {" "}
                  Products
                </Link>

                <Link to="AboutUs" title="" class="text-base font-medium text-white">
                  {" "}
                  About Us
                </Link>

                <Link to="Contactus" title="" class="text-base font-medium text-white">
                  {" "}
                  Contact Us
                </Link>
              </div>

              <div class="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                <div class="flex flex-col justify-center items-center text-white ">
                  <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src="" alt="" />
                  </a>
                  <div>Richesses de la Riviera</div>
                </div>
              </div>

              <button
                type="button"
                class="flex items-center justify-center ml-auto text-white  w-9 h-9 lg:hidden"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={toggleMenu}
                class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <div className="flex space-x-10">
                {check() ? (
                  <div class="hidden lg:flex justify-end lg:items-center lg:space-x-10">
                    <Link
                      to='/Profile'
                      title=""
                      class="flex items-center justify-center w-10 h-10 text-black"
                    >
                      {/* Add your profile icon SVG here */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>{" "}
                    </Link>{" "}
                  </div>
                ) : (
                  <div class="hidden lg:flex lg:items-center lg:space-x-10">
                    <Link
                      to = '/regestier'
                      title=""
                      class="text-base font-medium text-white"
                    >
                      {" "}
                      Sign up
                    </Link>

                    <Link
                      to = '/login'
                      title=""
                      class="text-base font-medium text-white"
                    >
                      {" "}
                      Sign in
                    </Link>
                  </div>
                )}
                <div class="hidden lg:flex lg:items-center lg:space-x-10">
                  <Link
                    to='/Cart'
                    title=""
                    class="flex items-center justify-center w-10 h-10 text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </Link>{" "}
                </div>{" "}
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- xs to lg --> */}
        <nav
          class={`py-4 bg-transparent lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Menu
              </p>

              <button
                type="button"
                class="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class={`mt-6 ${isMenuOpen ? "block" : "hidden"}`}>
              <div class="flex flex-col space-y-2">
                <a
                  href="#"
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Features
                </a>

                <a
                  href="#"
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Solutions
                </a>

                <a
                  href="#"
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Resources
                </a>

                <a
                  href="#"
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Pricing
                </a>
              </div>

              <hr class="my-4 border-gray-200" />

              <div class="flex flex-col space-y-2">
                <a
                  href="#"
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign up
                </a>

                <a
                  href="#"
                  title=""
                  class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;

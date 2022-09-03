import React from "react";
import '../App.css';

export default function NavLink() {
  return (
    <>
      <div className="navbar bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 " >
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>About us</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
            <div className=''><img src="https://i.postimg.cc/XN8vQBcv/logo.png" alt="logo" className='w-[55px] ml-5'/></div>
        </div>
        <div className="navbar-center hidden lg:flex bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>About Us</a>
            </li>
            <li tabIndex={0}>
              <a>
                Motivation
              </a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Alumni</a>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
              </span>
            </button>
        </div>
      </div>
    </>
  );
}

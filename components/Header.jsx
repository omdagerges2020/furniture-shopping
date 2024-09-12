"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Home
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Shop
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </Typography>
      </ul>
    );
  }

  return (
    <div className="max-h-[768px] w-full overflow-hidden">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-white rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img src="/images/logo.png" alt="" width={185} height={41} />
          {/* Links */}
          <div className="hidden lg:flex">
            <NavList />
          </div>
          {/* icons */}
          <div className="icons hidden lg:flex w-[20%] gap-2 justify-evenly items-center">
            <button>
              <FaRegUser className="text-black" />
            </button>
            <button>
              <CiSearch className="text-black font-bold" />
            </button>
            <button>
              <CiHeart className="text-black font-bold" />
            </button>
            <button>
              <IoCartOutline className="text-black font-bold" />
            </button>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        {/* collapse */}
        <Collapse open={openNav} className="lg:hidden">
          <NavList />
          <div className="icons flex w-[100%] gap-2 justify-evenly items-center">
            <button>
              <FaRegUser className="text-black" />
            </button>
            <button>
              <CiSearch className="text-black font-bold" />
            </button>
            <button>
              <CiHeart className="text-black font-bold" />
            </button>
            <button>
              <IoCartOutline className="text-black font-bold" />
            </button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

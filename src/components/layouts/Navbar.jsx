import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const pathName = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="container mx-auto bg-slate-600/70">
      <div className="">
        <div className="fixed z-50 w-full justify-center py-4 px-4 ">
          <div className="flex justify-between items-center lg:px-20 md:px-10">
            <div className="flex items-center hover:cursor-pointer">
              <img className="w-8 h-8" src="logo.png" alt="logo" />
              <div className="text-white text-xl font-bold pl-3">
                <h2>Paws n’ Play</h2>
              </div>
              <div className="items-center">
                <ul className="hidden md:flex justify-center text-center items-center text-xs  text-white/60 flex-wrap lg:pl-8 pl-6 lg:space-x-8 space-x-3">
                  <li className="flex items-center hover:cursor-pointer">
                    <span className="pr-[2px]">Shop</span>
                    <span className="">
                      <IoIosArrowDown className="" />
                    </span>
                  </li>
                  <li className="flex items-center  hover:cursor-pointer">
                    <span className="pr-[2px]">Services</span>
                    <span className="">
                      <IoIosArrowDown className="" />
                    </span>
                  </li>
                  <li className=" hover:cursor-pointer">About Us</li>
                  <li className=" hover:cursor-pointer">Blog</li>
                  <li className=" hover:cursor-pointer">Contact</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-[30px] h-[30px]">
                <button onClick={() => setOpen(!open)} className="md:hidden">
                  <HiOutlineMenuAlt3 className="text-3xl text-white" />
                </button>
              </div>
              <div className="hidden md:flex">
                <button
                  type="button"
                  className="py-2 px-3 lg:py-3 lg:px-[18px] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-salte-500  focus:z-10 focus:ring-4 focus:ring-gray-100  "
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed w-full top-0 h-full  bg-slate-500 transition-all  ${
              open ? "left-0" : "-left-full"
            }`}
          >
            <div className="py-2">
              <div className="relative">
                <button onClick={() => setOpen(!open)}>
                  <div className="font-extrabold text-3xl text-white/60 right-0 top-0 absolute pt-2 pr-2">
                    <IoMdClose />
                  </div>
                </button>

                <div className="flex flex-wrap justify-center items-center text-white/60 text-xl font-bold">
                  <img className="w-8 h-8 opacity-60" src="/logo.png" alt="" />
                  <h2>Paws n’ Play</h2>
                </div>

                <div className="flex justify-center text-white/60 pt-9">
                  <ul className="space-y-3  text-center items-center">
                    <li
                      className={`${
                        pathName.pathname === "/" && "underline text-white/80"
                      }`}
                      href="/"
                    >
                      Home
                    </li>
                    <li
                      className={`${
                        pathName.pathname === "/shope" &&
                        "underline text-white/80"
                      }`}
                      href="/"
                    >
                      Shope
                    </li>
                    <li
                      className={`${
                        pathName.pathname === "/shope" &&
                        "underline text-white/80"
                      }`}
                      href="/"
                    >
                      Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

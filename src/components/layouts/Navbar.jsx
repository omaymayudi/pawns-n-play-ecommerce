import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const pathName = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="lg:max-w-7xl md:max-w-3xl  mx-auto ">
        <div className="fixed w-full mx-auto py-4">
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center">
              <img className="w-8 h-8" src="src/assets/logo.png" alt="" />
              <div className="text-white text-xl font-bold pl-3">
                <h2>Paws n’ Play</h2>
              </div>
              <div className="items-center">
                <ul className="hidden md:flex justify-center text-center items-center text-xs  text-white/60 flex-wrap lg:pl-8 pl-6 lg:space-x-8 space-x-3">
                  <li className="flex items-center">
                    <span className="pr-[2px]">Shop</span>
                    <span className="">
                      <IoIosArrowDown className="" />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-[2px]">Services</span>
                    <span className="">
                      <IoIosArrowDown className="" />
                    </span>
                  </li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="w-[30px] h-[30px]">
              <button onClick={() => setOpen(!open)} className="md:hidden">
                <HiOutlineMenuAlt3 className="text-3xl text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-screen w-screen bg-[url('/src/assets/Hero-Section-mobile.png')] bg-cover  -left-full transition-all  ${
              open ? "left-0" : ""
            }`}
          >
            <div className="w-full mx-auto py-2">
              <div className="relative">
                <button onClick={() => setOpen(!open)}>
                  <div className="font-extrabold text-3xl text-white/60 right-0 top-0 absolute pr-2">
                    <IoMdClose />
                  </div>
                </button>

                <div className="flex flex-wrap justify-center items-center text-white/60 text-xl font-bold space-x-2">
                  <img
                    className="w-8 h-8 opacity-60"
                    src="src/assets/logo.png"
                    alt=""
                  />
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

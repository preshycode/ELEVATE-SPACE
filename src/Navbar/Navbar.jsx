import { NavLink, Outlet } from "react-router-dom";
import images from "../images";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full ">
      <div className=" flex justify-between items-start w-full px-10  mt-5 absolute z-10">
        <div className="navbar__logo lg:mt-5 max-lg:mt-5 max-sm:mt-1">
          <img src={images.logo} alt="" className="lg:w-16" />
        </div>
        <hr className="lg:w-2/5 bg-white h-px  bg-gray-200 border-0 dark:bg-gray-500 absolute top-12 z-100 left-20 ml-20 -mr- "></hr>
        <div className="navbar__links   max-sm:hidden  text-white ">
          <ul className="flex  font-barlow  lg:backdrop-blur-xl lg:bg-white/5 tracking-mywide uppercase font-thin bg-myblack absolute right-0 -top-5 px-10 lg:top-0">
            <li className="  py-10  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " mx-5 py-10  border-b-solid border-b-white border-b-2"
                    : "mx-5 py-10 hover:border-b-solid hover:border-b-slate-400 hover:border-b-2"
                }
              >
                <strong className="font-bold max-lg:hidden">00 </strong> Home
              </NavLink>
            </li>
            <li className="  py-10 ">
              <NavLink
                to="destination"
                className={({ isActive }) =>
                  isActive
                    ? " mx-5 py-10  border-b-solid border-b-white border-b-2"
                    : "mx-5 py-10 hover:border-b-solid hover:border-b-slate-400 hover:border-b-2"
                }
              >
                <strong className="font-bold max-lg:hidden">01 </strong>{" "}
                Destination
              </NavLink>
            </li>
            <li className=" py-10 ">
              <NavLink
                to="crew"
                className={({ isActive }) =>
                  isActive
                    ? " mx-5 py-10  border-b-solid border-b-white border-b-2"
                    : "mx-5 py-10 hover:border-b-solid hover:border-b-slate-400 hover:border-b-2"
                }
              >
                <strong className="font-bold max-lg:hidden">02 </strong> Crew
              </NavLink>
            </li>
            <li className="  py-10 ">
              <NavLink
                to="technology"
                className={({ isActive }) =>
                  isActive
                    ? " mx-5 py-10  border-b-solid border-b-white border-b-2"
                    : "mx-5 py-10 hover:border-b-solid hover:border-b-slate-400 hover:border-b-2"
                }
              >
                <strong className="font-bold max-lg:hidden">03 </strong>{" "}
                Technology
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar__hamburger  sm:hidden mt-3">
          {!toggle && (
            <img
              src={images.iconHamburger}
              alt=""
              onClick={() => setToggle(true)}
            />
          )}

          {toggle && (
            <div className="navbar__mobile h-screen w-2/3 text-white backdrop-blur-xl bg-white/10  flex flex-row-reverse justify-between pr-10 pt-7 absolute -top-5 right-0">
              <div className="navbar__mobile-head  ">
                <img
                  src={images.iconClose}
                  alt=""
                  onClick={() => setToggle(false)}
                />
              </div>

              <div className="navbar__mobile-menu mt-20 ml-10  w-5/6">
                <ul className="grid grid-col-1 gap-10 font-barlow  tracking-mywide uppercase font-thin text-sm">
                  <li className="wide">
                    <NavLink to="/" onClick={() => setToggle(false)}>
                      <strong className="font-bold">00 </strong> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="destination" onClick={() => setToggle(false)}>
                      <strong className="font-bold">01 </strong> Destination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="crew" onClick={() => setToggle(false)}>
                      <strong className="font-bold">02 </strong> Crew
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="technology" onClick={() => setToggle(false)}>
                      <strong className="font-bold">03 </strong> Technology
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

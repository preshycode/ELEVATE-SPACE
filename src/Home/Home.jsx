import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-sm:bg-homeMobile sm:bg-homeTablet xl:bg-homeDesktop bg-no-repeat bg-cover h-auto lg:h-screen relative  text-white">
      <div className="w-full  pt-32 max-sm:px-10 max-md:text-center items-center flex flex-col justify-between items-start md:text-center max-lg:px-40 sm:pt-48 lg:flex-row lg:text-left lg:px-48 lg:items-end lg:pt-80 max-lg:pb-96  ">
        <div className="home-text lg:w-1/2">
          <p className="uppercase font-barlow tracking-mywide uppercase font-thin text-sm text-slate-300 lg:text-xl">
            so, you want to travel to
          </p>
          <h1 className="font-bellefair uppercase text-6xl my-4  sm:text-9xl sm:my-8">
            Elevate Space
          </h1>
          <small className="sm:text-lg text-slate-300 font-barlow">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </small>
        </div>
        <div className=" bg-white text-black  uppercase font-bellefair  rounded-full font-bold text-xl mt-16 sm:mt-16 sm:text-5xl hover:p-10 hover:sm:p-20 hover:backdrop-blur-2xl  hover:bg-white/5  hover:ease-in-out hover:duration-1000">
          <NavLink to="/destination">
            <h1 className=" px-10 py-16 sm:px-16 sm:py-32  bg-white rounded-full ">
              explore
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";

const CrewTabs = ({ tabs = {} }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabAction = (index) => {
    setTabIndex(index);
  };
  return (
    <div>
      <div className="tabs__body">
        <div className="tab__content text-white text-center flex flex-col sm:flex-col-reverse lg:flex-row lg:mt-24 lg:text-left  lg:items-center lg:flex-row-reverse lg:justify-between lg:w-full ">
          <div className="tab__img  text-center mx-auto lg:w-1/2 ">
            <img
              src={tabs[tabIndex].img}
              alt=""
              className="w-48  sm:w-full  lg:w-128 "
            />
          </div>
          <hr className="mb-8 border-slate-600 border-1 sm:hidden" />
          <div className="star__tabs sm:flex sm:flex-col-reverse lg:w-2/3">
            {tabs.length === 0 ? (
              <div>No tabs</div>
            ) : (
              <div className="tab__label  text-white flex justify-between sm:my-16 mb-8 w-32  mx-auto text-slate-400 tracking-wide uppercase font-barlow font-thin lg:mx-0">
                {tabs.map((tab, index) => (
                  <label
                    key={index}
                    className={
                      index === tabIndex
                        ? "active-tab  pb-2 bg-white w-3 h-3 rounded-full"
                        : "tab bg-slate-600 w-3 h-3 rounded-full hover:bg-slate-400"
                    }
                    onClick={() => tabAction(index)}
                  >
                    <div className="text-xl m-4"></div>
                  </label>
                ))}
              </div>
            )}
            <div className="tab__text ">
              <h4 className="font-bellefair uppercase text-slate-400 text-xl sm:text-2xl lg:text-4xl">
                {tabs[tabIndex].position}
              </h4>
              <h2 className="font-bellefair uppercase text-3xl my-1 sm:text-4xl lg:text-5xl lg:my-10 lg:mt-4 ">
                {tabs[tabIndex].name}
              </h2>
              <p className="text-slate-300 mt-8 font-barlow sm:max-w-xl sm:mx-auto  lg:text-xl lg:w-2/3 lg:mx-0  ">
                {tabs[tabIndex].para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewTabs;

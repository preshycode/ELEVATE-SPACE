import { useState } from "react";

const TechnologyTabs = ({ tabs = {} }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabAction = (index) => {
    setTabIndex(index);
  };
  return (
    <div>
      <div className="tabs__body">
        <div className="tab__content text-white text-center flex flex-col lg:flex-row-reverse lg:mt-24 lg:text-left lg:justify-around lg:items-center">
          <div className="tab__img  text-center mx-0 my-8 ">
            <img
              src={tabs[tabIndex].imgL}
              alt=""
              className="w-full   lg:w-auto lg:hidden"
            />
            <img
              src={tabs[tabIndex].imgP}
              alt=""
              className="w-full  sm:w-80 lg:w-auto max-lg:hidden"
            />
          </div>
          <div className="star__tabs px-8 sm:px-20 lg:px-40 lg:flex">
            {tabs.length === 0 ? (
              <div>No tabs</div>
            ) : (
              <div className="tab__label text-white flex justify-between w-48  mx-auto text-slate-400  uppercase font-bellefair font-thin lg:mx-0 my-6 lg:my-0 lg:flex lg:flex-col lg:items-start">
                {tabs.map((tab, index) => (
                  <label
                    key={index}
                    className={
                      index === tabIndex
                        ? "active-tab bg-white text-black rounded-full font-bold border-2  border-white lg:my-4"
                        : "tab border-2  border-white rounded-full lg:my-4"
                    }
                    onClick={() => tabAction(index)}
                  >
                    <div className="py-3 px-5 lg:text-4xl lg:py-6 lg:px-9 ">
                      {tab.id}
                    </div>
                    {console.log(index)}
                  </label>
                ))}
              </div>
            )}
            <div className="tab__text lg:w-full ">
              <h4 className="tracking-widest font-barlow uppercase text-slate-400 text-xl sm:text-2xl lg:text-xl my-2">
                {tabs[tabIndex].category}
              </h4>
              <h2 className="font-bellefair uppercase text-3xl my-1 sm:text-6xl lg:text-6xl lg:my-10 lg:mt-4 ">
                {tabs[tabIndex].name}
              </h2>
              <p className="sm:leading-8 leading-8 text-slate-300 mt-8 font-barlow sm:max-w-xl sm:mx-auto sm:text-xl  lg:text-xl lg:w-full lg:leading-10 lg:mx-0  ">
                {tabs[tabIndex].para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTabs;

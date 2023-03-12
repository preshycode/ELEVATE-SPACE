import { useState } from "react";

const DestinationTabs = ({ tabs = {} }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabAction = (index) => {
    setTabIndex(index);
  };
  return (
    <div>
      <div className="tabs__body">
        <div className="tab__content text-white text-center flex flex-col lg:flex-row lg:mt-24 lg:text-left lg:justify-around lg:items-center">
          <div className="tab__img  text-center mx-auto my-8 ">
            <img
              src={tabs[tabIndex].img}
              alt=""
              className="w-48  sm:w-80 lg:w-auto"
            />
          </div>
          <div className="star__tabs">
            {tabs.length === 0 ? (
              <div>No tabs</div>
            ) : (
              <div className="tab__label text-white flex justify-between w-60 sm:w-80 mx-auto text-slate-400 tracking-wide uppercase font-barlow font-thin lg:mx-0">
                {tabs.map((tab, index) => (
                  <label
                    key={index}
                    className={
                      index === tabIndex
                        ? "active-tab border-b-solid border-b-white border-b-4 pb-2 text-white"
                        : "tab hover:border-b-solid hover:border-b-4 hover:border-b-slate-400"
                    }
                    onClick={() => tabAction(index)}
                  >
                    {tab.name}
                    {console.log(index)}
                  </label>
                ))}
              </div>
            )}
            <div className="tab__text">
              <h2 className="font-bellefair uppercase text-6xl my-6 sm:text-8xl lg:text-9xl lg:my-10">
                {tabs[tabIndex].name}
              </h2>
              <p className="text-slate-300 font-barlow sm:max-w-xl sm:mx-auto lg:max-w-lg lg:text-xl ">
                {tabs[tabIndex].para}
              </p>
              <hr className="my-8 border-slate-600 border-1" />
              <div className="distance__time sm:flex sm:justify-between sm:max-w-sm sm:mx-auto lg:mx-0">
                <div className="distance">
                  <h4 className="tracking-widest mb-2 uppercase font-barlow font-thin text-sm text-slate-400">
                    AVR. DISTANCE
                  </h4>
                  <p className="font-bellefair uppercase text-3xl ">
                    {tabs[tabIndex].distance}
                  </p>
                </div>
                <div className="time my-8 sm:my-0">
                  <h4 className="tracking-widest mb-2 uppercase font-barlow font-thin text-sm text-slate-400">
                    EST. TRAVEL TIME
                  </h4>
                  <p className="font-bellefair uppercase text-3xl">
                    {tabs[tabIndex].time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationTabs;

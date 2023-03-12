import images from "../images";
import CrewTabs from "./CrewTabs";

const Crew = () => {
  return (
    <div className="max-sm:bg-crewMobile sm:bg-crewTablet xl:bg-crewDesktop bg-no-repeat bg-cover h-auto relative ">
      <div className=" pt-28 px-8 sm:pt-40 sm:px-20 lg:px-40">
        <div className=" crew text-white mb-8 text-center tracking-widest uppercase font-barlow font-thin sm:text-left lg:text-2xl">
          <span className="font-bold text-slate-500">02</span> meet your crew
        </div>
        <div className="crew__personnel pb-40 sm:pb-60">
          <CrewTabs
            tabs={[
              {
                name: "Douglas Hurley",
                img: images.douglasHurley,
                para: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
                position: "Commander",
              },

              {
                name: "MARK SHUTTLEWORTH",
                img: images.markShuttleworth,
                para: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
                position: "Mission Specialist",
              },

              {
                name: "Victor Glover",
                img: images.victorGlover,
                para: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
                position: "Pilot",
              },
              {
                name: "Anousheh Ansari",
                img: images.anoushehAnsari,
                para: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
                position: "Flight Attendant",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;

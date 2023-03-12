import images from "../images";
import DestinationTabs from "./DestinationTab";
const Destination = () => {
  return (
    <div className="max-sm:bg-destinationMobile sm:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-cover h-auto relative">
      <div className=" pt-28 px-8 sm:pt-40 sm:px-20 lg:px-40">
        <div className=" destination text-white text-center tracking-widest uppercase font-barlow font-thin sm:text-left lg:text-2xl">
          <span className="font-bold text-slate-500">01</span> pick your
          destination
        </div>
        <div className="stars pb-40 sm:pb-60">
          <DestinationTabs
            tabs={[
              {
                name: "MOON",
                img: images.moon,
                para: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                distance: "384,400 KM",
                time: "3 DAYS",
              },

              {
                name: "MARS",
                img: images.mars,
                para: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                distance: "225 MIL. KM",
                time: "9 MONTHS",
              },

              {
                name: "EUROPA",
                img: images.europa,
                para: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                distance: "628 MIL. KM",
                time: "3 YEARS",
              },
              {
                name: "TITAN",
                img: images.titan,
                para: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                distance: "1.6 BIL. KM",
                time: "7 YEARS",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;

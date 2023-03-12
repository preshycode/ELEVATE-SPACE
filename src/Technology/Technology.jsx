import images from "../images";
import TechnologyTabs from "./TechnologyTabs.jsx";
const Technology = () => {
  return (
    <div className="max-sm:bg-technologyMobile sm:bg-technologyTablet xl:bg-technologyDesktop bg-no-repeat bg-cover h-auto  relative ">
      <div className=" pt-28  sm:pt-40 ">
        <div className=" technology text-white text-center tracking-widest uppercase font-barlow font-thin sm:text-left lg:text-2xl px-8 sm:px-20 lg:px-40">
          <span className="font-bold text-slate-500">03</span> space launch 101
        </div>
        <div className="stars pb-64 sm:pb-96 ">
          <TechnologyTabs
            tabs={[
              {
                id: 1,
                name: "launch vehicle",
                imgL: images.launchVehicleL,
                imgP: images.launchVehicleP,
                para: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                category: "the terminilogy...",
              },

              {
                id: 2,
                name: "space sport",
                imgL: images.spacePortL,
                imgP: images.spacePortP,
                para: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                category: "the terminilogy...",
              },

              {
                id: 3,
                name: "space capsule",
                imgL: images.spaceCapsuleL,
                imgP: images.spaceCapsuleP,
                para: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                category: "the terminilogy...",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;

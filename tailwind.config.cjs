/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeMobile: "url('/public/assets/home/background-home-mobile.jpg')",
        homeTablet: "url('/public/assets/home/background-home-tablet.jpg')",
        homeDesktop: "url('/public/assets/home/background-home-desktop.jpg')",
        destinationMobile:
          "url('/public/assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('/public/assets/destination/background-destination-tablet.jpg')",
        destinationDesktop:
          "url('/public/assets/destination/background-destination-desktop.jpg')",
        crewMobile: "url('/public/assets/crew/background-crew-mobile.jpg')",
        crewTablet: "url('/public/assets/crew/background-crew-tablet.jpg')",
        crewDesktop: "url('/public/assets/crew/background-crew-desktop.jpg')",
        technologyDesktop:
          "url('/public/assets/technology/background-technology-desktop.jpg')",
        technologyTablet:
          "url('/public/assets/technology/background-technology-tablet.jpg')",
        technologyMobile:
          "url('/public/assets/technology/background-technology-mobile.jpg')",
        launchVehicleL:
          "url('/public/assets/technology/image-launch-vehicle-landscape.jpg')",
        spaceSportL:
          "url('/public/assets/technology/image-space-sport-landscape.jpg')",
        spaceCapsuleL:
          "url('/public/assets/technology/image-space-capsule-landscape.jpg')",
        launchVehicleP:
          "url('/public/assets/technology/image-launch-vehicle-portrait.jpg')",
        spaceSportP:
          "url('/public/assets/technology/image-space-sport-portrait.jpg')",
        spaceCapsuleP:
          "url('/public/assets/technology/image-space-capsule-portrait.jpg')",
      },

      screens: {
        "3xl": "2500px",
      },
      fontFamily: {
        barlow: ["Barlow Condensed"],
        bellefair: ["Bellefair"],
        barlow: ["Barlow"],
      },
      letterSpacing: {
        mywide: ".3em",
      },
      backgroundColor: {
        myblack: "rgba(255, 255, 255, 0.04)",
      },
      borderRadius: {
        full: "50%",
      },
      width: {
        128: "450px",
      },
      borderWidth: {
        40: "  80px",
      },
    },
  },
  plugins: [],
};

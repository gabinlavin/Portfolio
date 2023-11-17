import React from "react";

const About = () => {
  return (
    <div name="About" className=" flex flex-col items-center h-screen w-screen">
      <h2 className="font-semibold text-[40px]">About</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-gradient-to-r from-cyan-900 to-blue-900 p-10">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <br></br>
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </div>
    </div>
  );
};

export default About;

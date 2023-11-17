import React from "react";
import javascript from "../assets/Technologies/javascript.png";
import html from "../assets/Technologies/html.png";
import css from "../assets/Technologies/css.png";
import firebase from "../assets/Technologies/firebase.png";
import figma from "../assets/Technologies/figma.png";
import reactjs from "../assets/Technologies/reactjs.png";
import github from "../assets/Technologies/github.png";

const Experience = () => {
  const Technologies = [
    {
      name: "javascript",
      imageSrc: javascript,
    },
    {
      name: "css",
      imageSrc: css,
    },
    {
      name: "html",
      imageSrc: html,
    },
    {
      name: "figma",
      imageSrc: figma,
    },
    {
      name: "firebase",
      imageSrc: firebase,
    },
    {
      name: "reactjs",
      imageSrc: reactjs,
    },
    {
      name: "github",
      imageSrc: github,
    },
  ];

  return (
    <div
      name="Experience"
      className=" h-screen w-full flex flex-col items-center justify-center"
    >
      <h2 className="font-semibold text-[40px]">Experience</h2>
      <div className="w-screen content-center  grid-cols-3 gap-8 grid  mt-[5%] pt-[10%] pb-[10%] bg-gradient-to-r from-cyan-900 to-blue-900 p-40">
        {Technologies.map((t) => (
          <div key={t.name} className="flex justify-center items-center">
            <img src={t.imageSrc} alt="Technologies" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
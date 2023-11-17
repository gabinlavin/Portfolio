import React from "react";
import descarga from "../assets/descarga.png";
import CustomCraft from "../assets/CustomCraft.png"
export const Projects = () => {
  const projects = [{
    description: "Proyecto Final de mi carrera como Desarrollador Web Full Stack",
    projectsImageSrc: CustomCraft ,
    gitHubLink: "https://github.com/fedeMaidana/Proyecto_Final.git" ,
    deployLink: "https://proyecto-final-fedemaidana.vercel.app/"

  },
  {
    description: "Proyecto Final de mi carrera como Desarrollador Web Full Stack",
    projectsImageSrc: CustomCraft ,
    gitHubLink: "https://github.com/fedeMaidana/Proyecto_Final.git" ,
    deployLink: "https://proyecto-final-fedemaidana.vercel.app/"

  },
  {
    description: "Proyecto Final de mi carrera como Desarrollador Web Full Stack",
    projectsImageSrc: CustomCraft ,
    gitHubLink: "https://github.com/fedeMaidana/Proyecto_Final.git" ,
    deployLink: "https://proyecto-final-fedemaidana.vercel.app/"

  }];

  return (
    <div
      name="projects"
      className="h-screen w-screen flex items-center flex-col "
    >
      <h2 className="font-semibold text-[40px]">Projects</h2>
      <div className=" gap-5 mt-10 grid grid-cols-3 md:grid-cols-1  ">
        {projects.map(p => (
        <div className=" shadow hover:shadow-lg relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500 overflow-hidden ">
          <img
            className=" object-cover " src={p.projectsImageSrc} alt="" />
          <span className=" flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px]  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-white">
            {p.description}
            </p>
            <div className="flex">
            <a href={p.deployLink}>Deploy</a>
            <a className="ml-4" href={p.gitHubLink}>GitHub</a>
            </div>
          </span>
        </div>
        ))}
      </div>
    </div>
  );
};

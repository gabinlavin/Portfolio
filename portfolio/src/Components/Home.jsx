import React from 'react'
import developer from "../assets/developer.png";
import header from "../assets/header.png";
import Menu from './Menu';

const Home = () => {
  return (
    <div className=' h-screen w-screen overflow-hidden'>
        <img alt='header' src={header} className='md:hidden w-screen' ></img>
        <div className='md:h-20 min-[700px]:hidden bg-gradient-to-r from-cyan-900 to-blue-900'>
        </div>
        {/* <img
                alt='developer'
                src={developer}
                className="absolute left-[50%] top-[130px] md:left-[20%] md:static"
                /> */}
                <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px] md:left-[0] md:w-screen p-6 md:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal">
                    <p className='"mb-8 text-4xl font-semibold leading-tight lg:text-6xl text-dark-grey-900"'> ¡Hola! Soy Gabriel Full Stack Developer </p>
                </div>
    </div>
  )
}

export default Home
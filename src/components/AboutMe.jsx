import { useEffect, useRef } from "react";
import ProfileImage from "./ProfileImage";
import { useInView, motion } from "framer-motion";
import { Reveal } from "../components/Reveal";


//const mainControls = useAnimation();

// useEffect(() => {
//  if (isInView) {
//    mainControls.start("visible");
//   ref.current.style.visibility = "visible"
// }
// }, [isInView]);

//const variants = {
//  hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

function AboutMe() {

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-3 pt-20 sm:gap-20 sm:flex-row sm:px-36">
      <ProfileImage />
      <div>
        <Reveal>
        <div>
          <h1 className="text-[42px] leading-tight font-bold text-white">
            ABOUT ME
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[154px]"></div>
            <p className="text-sm font-medium text-primary-color">WHO AM I</p>
          </div>
        </div>
        </Reveal>
          <p className="pt-10 sm:pt-5 text-left leading-[2rem] text-white font-extralight text-lg opacity-80">
          Hi there! I'm Ajilogba Ayomide, a passionate frontend developer with a
          creative flair and a knack for turning ideas into beautiful,
          user-friendly web experiences. My journey into the world of web
          development began when I realized the power of technology to connect
          and engage people. Since then, I've been on an exciting quest to
          create visually stunning, responsive websites that not only look great
          but also deliver seamless user experiences.
          </p>
        <div className="flex gap-4 pt-10 sm:pt-5">
          <Reveal>
          <button className="px-5 py-3 text-sm text-white transition-colors duration-500 border-none bg-primary-color hover:bg-hover ring-1 ring-primary-color focus:outline-none focus:bg-hover">
            <a href="https://drive.google.com/file/d/1vCcL3f0e_5lWvDlh-8yNzVrbc3c_0gBw/view?usp=sharing"> 
            Download Resume
            </a>
          </button>
          </Reveal> 
          <Reveal>

         
          <button  className="px-5 py-3 text-sm text-white transition-colors duration-500 border-none bg-primary-color hover:bg-hover ring-1 ring-primary-color focus:outline-none focus:bg-hover">
            <a target="blank" href="https://portfoliov3-rosy.vercel.app/">
            Hire Me
            </a>
          </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

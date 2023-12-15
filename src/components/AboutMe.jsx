import ProfileImage from "./ProfileImage";
import { Reveal } from "./Reveal";

function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-3 pt-20 sm:gap-20 sm:flex-row sm:px-36">
      <ProfileImage />
      <div>
        <Reveal> 
        <div className="flex flex-col">
          <h1 className="text-[42px] leading-tight font-bold text-white">
            ABOUT ME
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[154px]"></div>
            <p className="text-sm font-medium text-primary-color">WHO AM I</p>
          </div>
        </div>
        </Reveal>
        <Reveal>
        <p className="pt-5 text-left leading-[2rem] text-white font-extralight text-lg opacity-80">
          Hi there! I'm Ajilogba Ayomide, a passionate frontend developer with a
          creative flair and a knack for turning ideas into beautiful,
          user-friendly web experiences. My journey into the world of web
          development began when I realized the power of technology to connect
          and engage people. Since then, I've been on an exciting quest to
          create visually stunning, responsive websites that not only look great
          but also deliver seamless user experiences.
        </p>
        </Reveal>
        <div className="flex gap-4 pt-5">
          <Reveal>
          <button className="px-5 py-3 text-sm text-white transition-colors duration-500 border-none bg-primary-color hover:bg-hover ring-1 ring-primary-color focus:outline-none focus:bg-hover">
            Download Resume
          </button>
          </Reveal>
          <Reveal>
          <button className="px-5 py-3 text-sm text-white transition-colors duration-500 border-none bg-primary-color hover:bg-hover ring-1 ring-primary-color focus:outline-none focus:bg-hover">
            Hire Me
          </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

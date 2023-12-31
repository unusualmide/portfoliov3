import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Loader from "./Loader";
import { Reveal } from "../components/Reveal";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Strength() {

  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  function fetchData () {
    if (navigation.state === 'idle') {
      setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1700);
    }
    
  };

  fetchData();

  return () => {
    clearTimeout(); 
  };
}, []);


const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    },
  }
}

  
  return (
   isLoading ? <Loader /> : <div className="w-full h-full bg-all-bg">
     <Navigation />
     
     <div className="flex items-center justify-center">
     <Reveal>
        <div className="flex flex-col items-center justify-center pt-28">
          <h1 className="text-[42px] leading-tight font-bold text-white">
            WHAT I DO
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[122px]"></div>
            <p className="text-sm font-medium text-primary-color">
              TAKE A LOOK
            </p>
          </div>
        </div>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 pt-2 sm:grid-cols-2 ">
      <Reveal>
        <div className="pl-3 pr-3 sm:pl-12 sm:pr-0">
          
          <img
            className="object-contain w-[500px] h-[500px] "
            src="/strength-4.jpg"
            alt="strength-4"
          />  
        </div>
        </Reveal>
        <div className="grid grid-flow-row grid-cols-1  sm:pr-32 sm:grid-cols-2 gap-y-5 sm:gap-x-5 pt-7 sm:pt-14">
          <Reveal>     
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img
              className="object-contain w-16 h-16"
              src="debugging.png"
              alt="debugging"
            />
            <h3 className="text-white">Debugging</h3>
            <p className="text-sm text-hover-text">
              Debugging is the process of detecting and removing of existing and
              potential errors (bugs) in a software code that can cause.
            </p>
          </div>
          </Reveal>
          <Reveal>  
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img
              className="object-contain w-16 h-16"
              src="debugging.png"
              alt="deployment"
            />
            <h3 className="text-white">Deployment</h3>
            <p className="text-sm text-hover-text">
              Deploying projects/sites and apps to live servers using tools like
              Heroku, Netlify, Vercel, AWS, Google Play Console
            </p>
          </div>
          </Reveal>
          <Reveal>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img
              className="object-contain w-16 h-16"
              src="debugging.png"
              alt="api-development"
            />
            <h3 className="text-white">API Development</h3>
            <p className="text-sm text-hover-text">
              API(Application Programming Interface software) is a set of
              instructions, standards or requirememts that enables a app{" "}
            </p>
          </div>
          </Reveal>
          <Reveal>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img
              className="object-contain w-16 h-16"
              src="debugging.png"
              alt="debugging"
            />
            <h3 className="text-white">Web Design</h3>
            <p className="text-sm text-hover-text">
              Responsible for creating the visual and interactive elements of a
              website, focusing on the aesthetics and user experience
            </p>
          </div>
          </Reveal>
        </div>
      </div>
      <div className="items-center justify-center hidden mt-20 bg-fixed bg-transparent bg-center bg-no-repeat bg-cover sm:flex sm:mx-4 h-60 px-44 bg-strength">
        <div className="flex items-center justify-center">
          <Reveal>
          <img className="hidden sm:block " src="counter_2.png" alt="counter_2" />
          </Reveal>
          <div className="text-center">
            <h3 className="text-4xl font-black text-white">30</h3>
            <p className="text-2xl text-hover-text">Project Done</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Reveal>
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-[42px] leading-tight font-bold text-white">
            MY SKILLS
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[140px]"></div>
            <p className="text-sm font-medium text-primary-color">EXPERT IN</p>
          </div>
        </div>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 pt-8 sm:grid-cols-4 sm:gap-x-10 gap-y-10 px-28">
        <div className="flex items-center justify-center">
        <Reveal>
        <div className="flex flex-col items-center justify-start gap-3 w-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="html5"><path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
        </svg>
        <h4 className="text-white ">Html</h4>
        </div>
        </Reveal>
        </div>
        <div className="flex items-center justify-center"> 
        <Reveal>
        <div className="flex flex-col items-center justify-start gap-3 w-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="css3"><path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>
        <h4 className="text-white ">Css</h4>
        </div>
        </Reveal>
        </div>
        <div className="flex items-center justify-center">  
    <Reveal>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <h4 className="text-white ">Github</h4>
        </div>
        </Reveal>
        </div>
        <div className="flex items-center justify-center"> 
         <Reveal>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="128" height="128" viewBox="0 0 48 48">
<path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
</svg>
        <h4 className="text-white ">Javascript</h4>
        </div>
        </Reveal>
        </div>
        <div className="flex items-center justify-center">     
        <Reveal>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="128" height="128" viewBox="0 0 48 48">
<path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
</svg>
        <h4 className="text-white ">Tailwind Css</h4>
        </div>
        </Reveal>
        </div>
        <div className="flex items-center justify-center">
        <Reveal>
        <div className="flex flex-col items-center justify-start gap-3">
        <svg height="128" viewBox="3.7 3.7 43.6 43.6" width="128" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>
        
        <h4 className="text-white ">Framer Motion</h4>
        </div>
        </Reveal>
        </div>
        <div className="flex items-center justify-center">
        <Reveal>
        <div className="flex flex-col items-center justify-start gap-3">
        <svg height="128" viewBox="175.7 78 490.6 436.9" width="128" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
        
        <h4 className="text-white ">React</h4>
        </div>
        </Reveal>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Strength;

import { useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

function Portfolio() {

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
  
  return (
    isLoading ? <Loader /> : <div className="w-full h-full bg-all-bg">
      <Navigation />
     
      <div className="flex flex-col items-center justify-center pt-32 sm:pt-20">
        <h1 className="whitespace-nowrap text-[36px] sm:text-[42px] leading-tight font-bold text-white">
          MY PORTFOLIO
        </h1>
        <div className="flex justify-start items-center gap-2.5 ">
          <div className="h-0.5 bg-white w-[193px] sm:w-[242px]"></div>
          <p className="text-sm font-medium text-primary-color">PROJECTS</p>
        </div>
      </div>
     
      <div className="flex items-center justify-center flex-col sm:flex-row pt-[70px] pr-[2%] pb-[40px] pl-[1.5%]">
        
        <div className="sm:relative w-[90%] sm:w-[40%]">
        <img className="block bg-cover bg-none " src="public/personal-portfolio.png" placeholder="blur" alt="personal-portfolio-image"/>
        </div>
        <div className="w-[90%] sm:w-[40%] pl-[1%]  mt-3 sm:mt-[160px]  sm:mr-[1%] mb-[1%] sm:ml-[-40px] sm:z-30 opacity-100  bg-black py-2.5">
          <h2 className="p-5 text-3xl font-normal transition-all duration-[4s] ease-in text-primary-color">Ayomide Ajilogba - v1</h2>
          <p className="p-5 text-lg font-normal text-white opacity-80">This is my personal portfolio website (v1). Built with ReactJS</p>
          <div className="text-center">
          <a className="underline text-inherit" href="" target="_blank" rel="noreferrer">
            <button className="text-lg opacity=80 font-normal py-2.5 px-5 bg-transparent text-primary-color outline-none m-5 border border-primary-color overflow-hidden relative transition-all duration-[4s] ease-in">
              <span className="max-w-full p-0 m-0">View Project</span>
            </button>
          </a>
        </div>
        </div>
        
      </div>

      <div className="flex items-center justify-center flex-col sm:flex-row pt-[70px] pr-[2%] pb-[40px] pl-[1.5%]">
        
        <div className="sm:relative w-[90%] sm:w-[40%]">
        <img className="block bg-cover bg-none " src="/weather-app.png" placeholder="blur" alt="personal-portfolio-image"/>
        </div>
        <div className="w-[90%] sm:w-[40%] pl-[1%]  mt-3 sm:mt-[160px]  sm:mr-[1%] mb-[1%] sm:ml-[-40px] sm:z-30 opacity-100  bg-black py-2.5">
          <h2 className="p-5 text-3xl font-normal transition-all duration-[4s] ease-in text-primary-color">Weather App</h2>
          <p className="p-5 text-lg font-normal text-white opacity-80">This mini weather app is desigmed and developed to serve individuals with current weather information or stats and also predict future weather condition.</p>
          <div className="text-center">
          <a className="underline text-inherit" href="https://weather-app-cjl4.onrender.com/" target="_blank" rel="noreferrer">
            <button className="text-lg opacity=80 font-normal py-2.5 px-5 bg-transparent text-primary-color outline-none m-5 border border-primary-color overflow-hidden relative transition-all duration-[4s] ease-in">
              <span className="max-w-full p-0 m-0">View Project</span>
            </button>
          </a>
        </div>
        </div>
        
      </div>

      <Footer />
    </div> 
  );
}

export default Portfolio;

import { useNavigation } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function About() {

  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  function fetchData () {
    if (navigation.state === 'idle') {
      setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    }
    
  };

  fetchData();

  return () => {
    clearTimeout(); 
  };
}, []);
  
  return (
    isLoading ? <Loader /> : <div className="max-w-full max-h-full bg-[#050505] overflow-hidden">
      <div>
      <Navigation />
      <AboutMe />
      <Education />
      <div>
       <Experience />
      </div>
       </div>
      <Footer />
    </div>
  );
}

export default About;

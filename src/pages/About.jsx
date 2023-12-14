import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Loader from "./Loader";

function About({isLoading}) {
  return (
    isLoading ? <Loader /> : <div className="max-w-full max-h-full bg-black">
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

import { useTypewriter, Cursor } from "react-simple-typewriter";
//import PageNav from "../components/PageNav";


import Navigation from "../components/Navigation";
import PageNav from "../components/PageNav";
import Loader from "./Loader";





function HomePage({isLoading}) {
  //  const [isOpen, setIsOpen] = useState(true);

  // function openNav() {
  //   setIsOpen(show => !show)
  
  
  const [text] = useTypewriter({
    words: ["a Frontend Developer.", "a Web Developer."],
    loop: 0,
  });

  return (
 isLoading ? <Loader/> : <>
      <Navigation />
      <main className="h-screen  bg-black bg-bottom sm:bg-right-bottom bg-no-repeat bg-[length:570px_500px] bg-portfolio-image flex flex-col sm:flex-row justify-center items-center p-12">
        <div className="flex flex-row items-center justify-center gap-5 sm:flex-col">
          <a href="https://instagram.com/this.mide">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100 min-h-full min-w-full"
              src="/social-icon-instagram.svg"
              alt="social-icon-instagram"
            />
          </a>
          <a href="https://github.com/unusualmide">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="/social-icon-github.svg"
              alt="social-icon-github"
            />
          </a>
          <a href="https://www.linkedin.com/in/ajilogba-ayomide-090479280">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="/social-icon-linkedin.svg"
              alt="social-icon-linkedin"
            />
          </a>
          <a href="https://twitter.com/unusualmide321">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="/social-icon-twitter.svg"
              alt="social-icon-twitter"
            />
          </a>
          <a href="">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="/social-icon-youtube.svg"
              alt="social-icon-youtube"
            />
          </a>
        </div>
        <div className="flex flex-col order-first gap-10 my-auto sm:mx-auto sm:order-none">
          <h2 className="text-6xl font-black leading-snug text-center text-primary-color">
            Ayomide <span className="text-white">Ajilogba</span>
          </h2>
          <p className="text-3xl leading-snug text-center text-white">
            I'm <span className="text-primary-color">{text}</span>
            <Cursor cursorColor="#f6483b" />
          </p>
        </div>
        <div className="hidden sm:block">
          <a href="mailto:ajilogbaayomide34@gmail.com">
            <img
              className="transition duration-300 opacity-50 w-7 hover:opacity-100"
              src="/send-email.png"
              alt="send-email"
            />
          </a>
        </div>
      </main>
    </>
  );
}

export default HomePage;

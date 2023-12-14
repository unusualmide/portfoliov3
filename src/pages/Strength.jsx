import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Loader from "./Loader";

function Strength({isLoading}) {
  return (
   isLoading ? <Loader /> : <div className="w-full h-full bg-all-bg">
     <Navigation />
      <div>
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
      </div>
      <div className="grid grid-cols-1 pt-2 sm:grid-cols-2 ">
        <div className="pl-3 pr-3 sm:pl-12 sm:pr-0">
          <img
            className="object-contain w-[500px] h-[500px] "
            src="strength-4.jpg"
            alt="strength-4"
          />
        </div>
        <div className="grid grid-flow-row grid-cols-1 sm:pr-32 sm:grid-cols-2 gap-y-5 sm:gap-x-5">
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
        </div>
      </div>
      <div className="items-center justify-center hidden mt-20 bg-fixed bg-transparent bg-center bg-no-repeat bg-cover sm:flex sm:mx-4 h-60 px-44 bg-strength">
        <div className="flex items-center justify-center">
          <img className="hidden sm:block " src="counter_2.png" alt="counter_2" />
          <div className="text-center">
            <h3 className="text-4xl font-black text-white">30</h3>
            <p className="text-2xl text-hover-text">Project Done</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-[42px] leading-tight font-bold text-white">
            MY SKILLS
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[140px]"></div>
            <p className="text-sm font-medium text-primary-color">EXPERT IN</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-8 sm:grid-cols-4 sm:gap-x-10 gap-y-10 px-28">
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg className="bg-center bg-no-repeat bg-html" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <path
            fill="transparent"
            stroke="#202020"
            stroke-width="8"
            d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"
          ></path>
          <path
            fill="transparent"
            stroke="#00c8ff"
            stroke-width="8"
            d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 43.489510975495364 22.394815700165097 "
          ></path>
        
        </svg>
        <h4 className="text-white ">Html & Css</h4>
        </div>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path fill="transparent" stroke="#202020" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"></path><path fill="transparent" stroke="#ff8511" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 8.676294097439992 70.40302819167597 "></path></svg>
        <h4 className="text-white ">React</h4>
        </div>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg className="bg-center bg-no-repeat bg-html" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <path
            fill="transparent"
            stroke="#202020"
            stroke-width="8"
            d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"
          ></path>
          <path
            fill="transparent"
            stroke="#00c8ff"
            stroke-width="8"
            d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 43.489510975495364 22.394815700165097 "
          ></path>
        
        </svg>
        <h4 className="text-white ">Tailwind Css</h4>
        </div>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path fill="transparent" stroke="#202020" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"></path><path fill="transparent" stroke="#f26525" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 4.000016859436826 100.05689474128955 "></path></svg>
        <h4 className="text-white ">Javascript</h4>
        </div>
        <div className="flex flex-col items-center justify-start gap-3 ">
        <svg className="bg-center bg-no-repeat bg-html" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <path
            fill="transparent"
            stroke="#202020"
            stroke-width="8"
            d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"
          ></path>
          <path
            fill="transparent"
            stroke="#00c8ff"
            stroke-width="8"
            d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 43.489510975495364 22.394815700165097 "
          ></path>
        
        </svg>
        <h4 className="text-white ">GitHub</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Strength;

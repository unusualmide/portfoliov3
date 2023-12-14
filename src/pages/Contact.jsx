import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Loader from "./Loader";

function Contact({isLoading}) {
  return (
   isLoading ? <Loader /> : <div className="h-full bg-black">
     <Navigation />
      <div>
        <div className="flex flex-col items-center justify-center pt-32 sm:pt-20">
          <h1 className="whitespace-nowrap text-[36px] sm:text-[42px] leading-tight font-bold text-white">
            GET IN TOUCH
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[165px] sm:w-[200px]"></div>
            <p className="text-sm font-medium text-primary-color">CONTACT US</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 px-3 pt-8 sm:grid-cols-2 sm:px-28">
        <form action="#">
          <p className="text-xl font-medium text-white sm:text-3xl whitespace-nowrap">HOW WE CAN HELP YOU ?</p>
          <div className="grid grid-cols-2 gap-4 pt-8">
            <input placeholder="Your Name" className="px-[15px] h-12 text-white  bg-exp-color placeholder-white/30 placeholder:font-light placeholder:text-sm focus:outline-none focus:bg-white/20 transition-colors duration-500 hover:bg-white/20" name="name" type="text"/>
            <input placeholder="Your Email" className="px-[15px] h-12 text-white  bg-exp-color placeholder-white/30 placeholder:font-light placeholder:text-sm focus:outline-none focus:bg-white/20 transition-colors duration-500 hover:bg-white/20" name="email" type="email"/>
          </div>
          <input placeholder="Subject" className="px-[15px] h-12 w-full text-white mt-8 bg-exp-color placeholder-white/30 placeholder:font-light placeholder:text-sm focus:outline-none focus:bg-white/20 transition-colors duration-500 hover:bg-white/20" name="subject" type="text"/> 
          <label></label>
          <textarea placeholder="Message" rows='4' id="message" className="pl-[15px] pt-[15px] h-48 w-full text-white mt-8 bg-exp-color placeholder-white/30 placeholder:font-light placeholder:text-sm focus:outline-none focus:bg-white/20 transition-colors duration-500 hover:bg-white/20" ></textarea> 
          <button className="py-3 text-base text-white transition-colors duration-500 border-none mt-9 px-7 bg-primary-color hover:bg-hover ring-1 ring-primary-color focus:outline-none focus:bg-hover">
            Submit
          </button>
        </form>
        <div className="border"> 
        <p text-white>Love</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-3 pt-24 sm:px-0 sm:flex-row gap-7">
           <div className="h-64 w-full sm:w-[26.5%] relative  bg-box1 bg-center bg-cover hover:scale-105 transition duration-300">
            <div className=" flex flex-col items-center justify-center h-full text-base text-white after:content-[''] after:absolute after:w-full after:bg-black/80 after:h-64">
              <h3 className="z-10 font-medium text-white">Phone</h3>
              <p className="z-10 pt-6 font-light text-white/70 hover:text-white">09131990273</p>
              <p className="z-10 font-light hover:text-white text-white/70">09128314503</p>
              </div>
           </div>
           <div className="h-64 w-full sm:w-[26.5%] relative  bg-box2 bg-center bg-cover hover:scale-105 transition duration-300">
            <div className=" flex flex-col items-center justify-center h-full text-base text-white after:content-[''] after:absolute after:w-full after:bg-black/80 after:h-64">
              <h3 className="z-10 font-medium text-white">Email</h3>
              <p className="z-10 pt-6 font-light transition duration-300 cursor-pointer text-white/70 hover:text-primary-color">ajilogbaayomide34@gmail.com</p>
              <p className="z-10 font-light transition duration-300 cursor-pointer text-white/70 hover:text-primary-color">ajilogbaayomide315@gmail.com</p>
              </div>
           </div>
           <div className="h-64 w-full sm:w-[26.5%] relative  bg-box3 bg-center bg-cover hover:scale-105 transition duration-300">
            <div className=" flex flex-col items-center justify-center h-full text-base text-white after:content-[''] after:absolute after:w-full after:bg-black/80 after:h-64">
              <h3 className="z-10 font-medium text-white">Address</h3>
              <p className="z-10 pt-6 font-light text-white/70">Gbagada</p>
              <p className="z-10 font-light text-white/70">Lagos State</p>
              </div>
           </div>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;

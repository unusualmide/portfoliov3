import { NavLink, useNavigate } from "react-router-dom";



function PageNav() {
  

 let navigate = useNavigate();
 
  return ( 
<div className="fixed w-full h-screen bg-all-bg">
    <nav>
    
      <ul className="flex flex-col items-center justify-center h-screen gap-5 opacity-80">
      <li>
          <NavLink
            className="text-3xl tracking-normal text-center text-white"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-3xl tracking-normal text-center text-white"
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-3xl tracking-normal text-center text-white"
            to="/portfolio"
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-3xl tracking-normal text-center text-white"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-3xl tracking-normal text-center text-white"
            to="/strength"
          >
            STRENGTH
          </NavLink>
        </li>
      </ul>
    </nav> 

    <div className=" flex items-between justify-between   p-[10px]  -z-50">
      <NavLink to="/">
      <img
      className=" w-[130px] mr-auto object-contain absolute top-[-1%] sm:top-[2%] left-[-4%] sm:left-[0.1%] opacity-80"
      src="/my-logo.png"
      alt="portfolio-image"
    />
      </NavLink>
    
    <button onClick={() => navigate(-1)} className="closebar">
          <span className="close-icon close-first"></span>
          <span className="close-icon close-second"></span>
    </button>
  </div>
    </div> 
  ); 
}

export default PageNav;


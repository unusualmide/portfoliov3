import { NavLink } from "react-router-dom";
import MenuToggle from "../components/MenuToggle";


function Navigation() {

  return (
    <div className="fixed w-full h-[100px] p-[10px] z-50 flex justify-between items-center">
      <NavLink to="/">
        <img
          className=" w-[130px] mr-auto object-contain absolute top-[-1%] sm:top-[6%] left-[-4%] sm:left-[0.1%] opacity-80"
          src="/my-logo.png"
          alt="portfolio-image"
        />
      </NavLink>
    <MenuToggle />
    </div>
  );
}

export default Navigation;

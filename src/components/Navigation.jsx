import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="fixed w-full h-[100px] p-[10px] ">
      <NavLink to="/">
        <img
          className=" w-[130px] mr-auto object-contain absolute top-[-1%] sm:top-[6%] left-[-4%] sm:left-[0.1%] opacity-80"
          src="public/my-logo.png"
          alt="portfolio-image"
        />
      </NavLink>
      <NavLink className="menubar" to="/pagenav">
        <span className="first-icon menu-open-icon"></span>
        <span className="second-icon menu-open-icon"></span>
        <span className="third-icon menu-open-icon"></span>
      </NavLink>
    </div>
  );
}

export default Navigation;

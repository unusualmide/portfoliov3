import { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuToggle() {

  
  
//console.log(toggleOpen)

  return (
    <NavLink to='/pagenav' className="pr-[4%] pt-[3%]">
    <button>
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        strokeWidth="0.384"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
        <path
            d="M5 8H13.75M5 12H19M10.25 16L19 16"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </button>  
    </NavLink> 
  );

}

export default MenuToggle;

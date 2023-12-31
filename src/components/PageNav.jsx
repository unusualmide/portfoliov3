import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PageNav() {
  const pagenav = {};

  let navigate = useNavigate();

  const variants = {
    hidden: {
      y: "-100vw",
      transition: {
        type: "spring",
        restDelta: 2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      y: 0,
      transition: {
        mass: 0.4,
        damping: 8,
        stiffness: 120,
        ease: "easeInOut",
        type: "linear",
        duration: 0.8,
        staggerChildren: 0.07,
        delayChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const childVariants = {
    hidden: {
      y: "3vw",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        damping: 2,
        ease: "easeInOut",
        velocity: 2,
        type: "linear",
        duration: 0.5,
         delay: 0.25,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="fixed w-full h-full bg-nav-color"
    >
      <nav>
        <ul className="flex flex-col items-center justify-center h-screen gap-5 opacity-80">
          <motion.li
            whileHover={{ scale: 1.2,  color: '#FFFFFF' }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}          
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink
              className="text-3xl tracking-normal text-center text-white"
              to="/"
            >
              HOME
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: '#FFFFFF'}}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}          
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink
              className="text-3xl tracking-normal text-center text-white"
              to="/about"
            >
              ABOUT
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: '#FFFFFF' }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}          
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink
              className="text-3xl tracking-normal text-center text-white"
              to="/portfolio"
            >
              PORTFOLIO
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: '#FFFFFF' }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}          
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink
              className="text-3xl tracking-normal text-center text-white"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: '#FFFFFF' }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}          
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink
              className="text-3xl tracking-normal text-center text-white"
              to="/strength"
            >
              STRENGTH
            </NavLink>
          </motion.li>
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
    </motion.div>
  );
}

export default PageNav;

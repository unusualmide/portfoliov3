import {  motion } from "framer-motion";



const variants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: { opacity: 1, y: 0 },
};


function ProfileImage() {
  return (
    <motion.img
      variants={variants}
      initial="hidden"
      transition={{ duration: 1, delay: 0.25 }}
      animate='visible'
      className="block object-contain sm:w-[500px] sm:first-letter:h-[500px] max-w-full"
      src="/portfolio-image.png"
      alt="PROFILE"
    />
  );
}

export default ProfileImage;

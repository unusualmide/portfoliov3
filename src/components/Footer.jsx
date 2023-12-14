function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 px-24 py-8 sm:flex-row mt-14 bg-exp-color">
      <p className="text-[13px] text-center text-white sm:text-base sm:mr-auto whitespace-nowrap">
        Copyright &copy; 2023 Portfolio. All Rights Reserved
      </p>
      <div className="flex flex-row items-center justify-center gap-5">
          <a href="https://instagram.com/this.mide">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100 min-h-full min-w-full"
              src="public/social-icon-instagram.svg"
              alt="social-icon-instagram"
            />
          </a>
          <a href="https://github.com/unusualmide">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="public/social-icon-github.svg"
              alt="social-icon-github"
            />
          </a>
          <a href="https://www.linkedin.com/in/ajilogba-ayomide-090479280">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="public/social-icon-linkedin.svg"
              alt="social-icon-linkedin"
            />
          </a>
          <a href="https://twitter.com/unusualmide321">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="public/social-icon-twitter.svg"
              alt="social-icon-twitter"
            />
          </a>
          <a href="">
            <img
              className="w-[23px] transition duration-300 opacity-50 hover:opacity-100"
              src="public/social-icon-youtube.svg"
              alt="social-icon-youtube"
            />
          </a>
        </div>
    </footer>
  );
}

export default Footer;

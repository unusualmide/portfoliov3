function Education() {
  return (
    <div className="">
      <div>
        <div className="flex flex-col items-center justify-center pt-14">
          <h1 className="text-[42px] leading-tight font-bold text-white">
            EDUCATION
          </h1>
          <div className="flex justify-start items-center gap-2.5 ">
            <div className="h-0.5 bg-white w-[170px]"></div>
            <p className="text-sm font-medium text-primary-color">LEARNING</p>
          </div>
        </div>
      </div>

      <ul className="flex flex-col pl-3 pr-3 sm:pl-32 sm:pr-28 gap-11">
        <li className="flex items-end justify-end w-full pt-9">
          <div className="flex items-center justify-center gap-9">
            <h2 className="text-6xl font-medium text-white/20 before:content-[''] before:border before:p-1 before:mr-3 before:rounded-full before:inline-block before:relative before:-top-3 before:ring-2 before:ring-slate-50 hover:text-primary-color before:hover:ring-primary-color before:hover:ring-2 hover:scale-110 hover:transition-transform hover:duration-500">
              2016
            </h2>
            <div className="text-white ">
              <h3 className="text-lg">Diploma in Office and Graphics Package</h3>
              <p className="text-base">Lagos State</p>
              <p className="pt-4 font-medium text-hover-text">
                Hands-On Computer Academy
              </p>
            </div>
          </div>
        </li>

        <li className="flex items-start justify-start text-end pt-9">
          <div className="flex items-center justify-center gap-9">
            <div className="text-white ">
              <h3 className="text-lg">Senior Secondary School Cert</h3>
              <p className="text-base">Lagos State</p>
              <p className="pt-4 font-medium text-hover-text">
                Federal Science and Technical College
              </p>
            </div>
            <h2 className="text-6xl font-medium text-white/20 after:content-[''] after:border after:p-1 after:ml-3 after:rounded-full after:inline-block after:relative after:-top-3 after:ring-2 after:ring-slate-50 hover:text-primary-color after:hover:ring-primary-color after:hover:ring-2 hover:scale-110 hover:transition-transform hover:duration-500">
              2019
            </h2>
          </div>
        </li>

        <li className="flex items-end justify-end pt-9">
          <div className="flex items-center justify-center gap-9">
            <h2 className="text-6xl font-medium text-white/20 before:content-[''] before:border before:p-1 before:mr-3 before:rounded-full before:inline-block before:relative before:-top-3 before:ring-2 before:ring-slate-50 hover:text-primary-color before:hover:ring-primary-color before:hover:ring-2 hover:scale-110 hover:transition-transform hover:duration-500">
              2023
            </h2>
            <div className="text-white ">
              <h3 className="text-lg">Website Development and Debugging</h3>
              <p className="text-base">Lagos State</p>
              <p className="pt-4 font-medium text-hover-text">
               Apt Learn
              </p>
            </div>
          </div>
        </li>

        <li className="flex items-start justify-start text-end pt-9">
          <div className="flex items-center justify-center gap-9">
            <div className="text-white ">
              <h3 className="text-lg">Website Development</h3>
              <p className="text-base">Lagos State</p>
              <p className="pt-4 font-medium text-hover-text">
              Federal Science and Technical College
              </p>
            </div>
            <h2 className="text-6xl font-medium text-white/20 content-[''] after:border after:p-1 after:ml-3 after:rounded-full after:inline-block after:relative after:-top-3 after:ring-2 after:ring-slate-50 hover:text-primary-color after:hover:ring-primary-color after:hover:ring-2 hover:scale-110 hover:transition-transform hover:duration-500">
              2004
            </h2>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;

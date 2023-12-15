import { Reveal } from "./Reveal";

function Experience() {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-center">
      <Reveal>
      <div className="flex flex-col items-center justify-center pt-14">
        <h1 className="text-[42px] leading-tight font-bold text-white">
          EXPERIENCE
        </h1>
        <div className="flex justify-start items-center gap-2.5 ">
          <div className="h-0.5 bg-white w-[154px]"></div>
          <p className="text-sm font-medium text-primary-color">INVOLVEMENT</p>
        </div>
      </div>
      </Reveal>
      </div>
      <ul className="grid w-full grid-flow-row grid-cols-1 px-3 sm:grid-cols-2 sm:px-28 pt-14 gap-y-10 sm:gap-x-10">
        <li className="flex flex-row gap-5 p-5 transition duration-500 h-80 bg-exp-color hover:bg-white/10">
          <div className="flex flex-col items-end justify-end gap-2 text-end">
            <p className="text-4xl font-bold transition duration-500 sm:text-8xl text-white/20 hover:text-primary-color">
              2023
            </p>
            <p className="text-sm text-white sm:text-lg whitespace-nowrap">July To 2023 Aug</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg text-white">Web Developer</h3>
            <p className="text-sm text-white">CodSoft</p>
            <p className="text-sm text-hover-text">Developed and designed UI for a landing page of customer's health and created a secure login for over 100 members</p>
          </div>
        </li>
        <li className="flex flex-row w-full gap-5 p-5 transition duration-500 h-80 bg-exp-color hover:bg-white/10">
          <div className="flex flex-col items-end justify-start gap-2 text-end">
            <p className="text-4xl font-bold transition duration-500 sm:text-8xl text-white/20 hover:text-primary-color">
              2023
            </p>
            <p className="text-sm text-white sm:text-lg whitespace-nowrap">July To 2023 Aug</p>
          </div>
          <div className="flex flex-col items-start justify-end gap-3 ">
            <h3 className="text-lg text-white">Web Developer</h3>
            <p className="text-sm text-white">CodSoft</p>
            <p className="text-sm text-hover-text">Developed and designed UI for a landing page of customer's health and created a secure login for over 100 members</p>
          </div>
        </li>
        <li className="flex flex-row w-full gap-5 p-5 transition duration-500 h-80 bg-exp-color hover:bg-white/10">
          <div className="flex flex-col items-end justify-end gap-2 text-end">
            <p className="text-4xl font-bold transition duration-500 sm:text-8xl text-white/20 hover:text-primary-color">
              2023
            </p>
            <p className="text-sm text-white sm:text-lg whitespace-nowrap">July To 2023 Aug</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg text-white">Web Developer</h3>
            <p className="text-sm text-white">CodSoft</p>
            <p className="text-sm text-hover-text">Developed and designed UI for a landing page of customer's health and created a secure login for over 100 members</p>
          </div>
        </li>
        <li className="flex flex-row w-full gap-5 p-5 transition duration-500 h-80 bg-exp-color hover:bg-white/10">
          <div className="flex flex-col items-end justify-start gap-2 text-end">
            <p className="text-4xl font-bold transition duration-500 sm:text-8xl text-white/20 hover:text-primary-color">
              2023
            </p>
            <p className="text-sm text-white sm:text-lg whitespace-nowrap">July To 2023 Aug</p>
          </div>
          <div className="flex flex-col items-start justify-end gap-3 ">
            <h3 className="text-lg text-white">Web Developer</h3>
            <p className="text-sm text-white">CodSoft</p>
            <p className="text-sm text-hover-text">Developed and designed UI for a landing page of customer's health and created a secure login for over 100 members</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Experience;

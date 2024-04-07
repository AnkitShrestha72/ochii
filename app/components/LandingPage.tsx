"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen py-1">
      <div className="textstructure mt-40 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map(
          (item: string, index: number) => {
            return (
              <>
                <div key={index} className="masker">
                  <div className="w-fit flex gap-3 items-center">
                    {index === 1 && (<div className="w-[8vw] h-[10vh] bg-red-500"></div>)}
                    <h1 className="uppercase text-[6vw] leading-none tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold ">
                      {item}
                    </h1>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item: string, index: number) => {
          return (
            <p key={index} className="text-md leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-4">
          <p className="uppercase border-1 border rounded-[2em] px-3 py-1 border-zinc-800 cursor-pointer">
            Start the project
          </p>
          <div className="border border-zinc-800 p-[.4em] rounded-full rotate-[-45deg]">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

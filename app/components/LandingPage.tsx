import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] py-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map(
          (item: string, index: number) => {
            return (
              <>
                <div key={index} className="masker">
                  <h1 className="uppercase text-8xl leading-none tracking-tighter font-bold">
                    {item}
                  </h1>
                </div>
              </>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item: string, index: number) => {
          return (
            <p key={index} className="text-md leading-none w-[60%]">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;

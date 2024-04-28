import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-300 w-full bottom-0 py-5">
      <div className="w-5/6 md:flex md:justify-between 
        md:items-center mx-auto md:h-full">
      <div className="w-full flex md:flex-row flex-col">
        <div className="basis-full md:basis-1/2 flex md:justify-start justify-center">
        
        </div>
      </div>
      </div>
      <div className="bg-white mt-10 mb-10 h-0.5 w-full"/>
      <div className="w-5/6 md:flex md:justify-between 
        md:items-center mx-auto md:h-full">
          <div className="w-full flex flex-row">
            <div className="basis-1/2 justify-start">
              <p className="text-xl text-white">&copy; 2024 | All Rights Reserved.</p>
            </div>
          </div>
      </div>
    </footer>
  );
};
export default Footer;
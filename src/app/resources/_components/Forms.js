import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import Image from 'next/image';

const FormsView = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full bg-grey flex flex-col gap-4 px-4 pt-4 rounded-2xl">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleCollapse}>
        <div className='flex flex-row gap-2 items-center'>
            <Image src={require("../../../assets/forms.png")} width={40}></Image>
            <h2 className="text-xl font-josefin_sans text-cream">Forms</h2>
        </div>
        <button className="arrow-button text-white">
          {isCollapsed ? <span>&#9660;</span> : <span>&#9650;</span>}
        </button>
      </div>
      <Collapsible trigger="" open={isCollapsed}>
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col'>
                    <p className='font-bold'> Report Form </p>
                </div>
                <button className='font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2
                 hover:text-grey flex items-center justify-center'> View </button>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat mb-4">
                <div className='flex flex-col'>
                    <p className='font-bold'> Feedback Form </p>
                </div>
                <button className='font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2
                 hover:text-grey flex items-center justify-center'> View </button>
            </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default FormsView;

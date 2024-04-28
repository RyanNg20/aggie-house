import React from 'react';
import Image from 'next/image';

const Meals = () => {
  return (
    <div className="md:w-1/2 w-full bg-beige flex flex-col gap-4 px-4 pt-4 rounded-2xl drop-shadow-lg">
      <div className="flex justify-between items-center cursor-pointer" >
        <div className='flex flex-row gap-2 items-center'>
            <Image src={require("../../../assets/meals.png")} width={40}></Image>
            <h2 className="text-xl font-josefin_sans text-grey">Meals</h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col'>
                    <p className='font-bold'> Monday April 29th, 2024</p>
                    <p className='font-medium'> Spaghetti & Meatballs </p>
                </div>
                <button className='font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2
                 hover:text-grey flex items-center justify-center'> Tutorial </button>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat mb-4">
                <div className='flex flex-col'>
                    <p className='font-bold'> Thursday May 2nd, 2024 </p>
                    <p className='font-medium'> Tofu Udon Stir-Fry </p>
                </div>
                <button className='font-montserrat bg-grey text-white rounded-md transition duration-500 hover:bg-beige px-8 py-2
                 hover:text-grey flex items-center justify-center'> Tutorial </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
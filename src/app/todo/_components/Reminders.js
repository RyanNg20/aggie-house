import React from 'react';
import Image from 'next/image';

const Reminders = () => {
  return (
    <div className="md:w-2/5 w-full bg-beige flex flex-col gap-4 px-4 pt-4 rounded-2xl drop-shadow-lg">
      <div className="flex justify-between items-center cursor-pointer" >
        <div className='flex flex-row gap-2 items-center'>
            <Image src={require("../../../assets/reminders.png")} width={40}></Image>
            <h2 className="text-xl font-josefin_sans text-grey">Reminders</h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col'>
                    <p className='font-bold'> Minimum Shifts Requirement!</p>
                    <p className='font-medium'> You need to sign up for one more shift to meet your requirements! </p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 mb-4 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col'>
                    <p className='font-bold'> Scan QR code in the kitchen</p>
                    <p className='font-medium'> Follow the linked tutorials to make dinner! </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
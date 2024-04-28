import React from 'react';
import Image from 'next/image';

const Chores = () => {
  return (
    <div className="w-full bg-grey flex flex-col gap-4 px-4 pt-4 rounded-2xl drop-shadow-lg">
      <div className="flex justify-between items-center cursor-pointer" >
        <div className='flex flex-row gap-2 items-center'>
            <Image src={require("../../../assets/chores.png")} width={40}></Image>
            <h2 className="text-xl font-josefin_sans text-white">Chores</h2>
        </div>
      </div>
      <div>
        <div className="md:hidden flex flex-column gap-4">
            <div className='mb-4 w-full flex flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat'>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 p-2 border-black">Sun</div>
                    <div className='border-b-2 p-2 border-black'>
                    <input type="checkbox" className="form-checkbox text-blue-500 border-gray-400 rounded checked:bg-blue-500 checked:border-transparent focus:outline-none focus-visible:ring-2 ring-blue-500" />
                        <p> Take out trask & compost bins</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 p-2 border-black">Mon</div>
                    <div className='border-b-2 p-2 border-black'>
                        <p> Do laundry </p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen </p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 p-2 border-black">Tues</div>
                    <div className='border-b-2 p-2 border-black'>
                        <p> Organize pantry (throw away molded or expired food) </p>
                        <p>Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 p-2 border-black">Wed</div>
                    <div className='border-b-2 p-2 border-black'>
                        <p>Vacuum stairs </p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen </p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 p-2 border-black">Thurs</div>
                    <div className='border-b-2 p-2 border-black'>
                        <p> Sweep & mop all wooden floors</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 p-2 border-black">Fri</div>
                    <div className='border-b-2 p-2 border-black'>
                        <p>Wipe down fridge and stovetop</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className="font-bold border-b-2 px-2 border-black">Sat</div>
                    <div className='border-b-2 px-2 border-black'>
                        <p> Clean bathroom (wipe down sink, clean toilet, sweep & mop floor)</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
            <div className="mb-4 flex md:flex-col flex-row justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='grid grid-cols-1 md:grid-cols-7 border-b-2 w-full border-black'>
                    <p className='font-bold border-r-2 px-2 border-black'> Sun</p>
                    <p className='font-bold border-r-2 px-2 border-black'> Mon</p>
                    <p className='font-bold border-r-2 px-2 border-black'> Tues</p>
                    <p className='font-bold border-r-2 px-2 border-black'> Wed</p>
                    <p className='font-bold border-r-2 px-2 border-black'> Thurs</p>
                    <p className='font-bold border-r-2 px-2 border-black'> Fri</p>
                    <p className='font-bold px-2'> Sat</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-7 justify-between w-full'>
                    <div className='border-r-2 p-2 border-black'>
                    <p> Take out trash & compost bins </p>
                    <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                    <div className='border-r-2 p-2 border-black'>
                        <p> Do laundry </p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen </p>
                    </div>
                    <div className='border-r-2 p-2 border-black'>
                        <p> Organize pantry (throw away molded or expired food) </p>
                        <p>Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                    <div className='border-r-2 p-2 border-black'>
                        <p>Vacuum stairs </p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen </p>
                    </div>
                    <div className='border-r-2 p-2 border-black'>
                        <p> Sweep & mop all wooden floors</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                    <div className='border-r-2 p-2 border-black'>
                        <p>Wipe down fridge and stovetop</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                    <div className='p-2'>
                        <p> Clean bathroom (wipe down sink, clean toilet, sweep & mop floor)</p>
                        <p> Daily tasks: wash dishes, sweep/vaccum, mop kitchen</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chores;
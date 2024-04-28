import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import Image from 'next/image';

const ImportantContacts = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full bg-grey flex flex-col gap-4 px-4 pt-4 rounded-2xl">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleCollapse}>
        <div className='flex flex-row gap-2 items-center'>
            <Image src={require("../../../assets/contacts.png")} width={40}></Image>
            <h2 className="text-xl font-josefin_sans text-cream">Important Contacts</h2>
        </div>
        <button className="arrow-button text-white">
          {isCollapsed ? <span>&#9660;</span> : <span>&#9650;</span>}
        </button>
      </div>
      <Collapsible trigger="" open={isCollapsed}>
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-2 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col md:order-1 order-2'>
                    <h1 className='font-bold underline'> Secretary </h1>
                    <p> <span className='font-bold'> Name: </span> Johnny Appleseed  </p>
                    <p> <span className='font-bold'> Email: </span> jappleseed@ucdavis.edu </p>
                    <p> <span className='font-bold'> Phone Number: </span> (123) 111-2222 </p>
                </div>
                <Image className="my-auto order-1" src={require("../../../assets/secretary.png")} width={120}></Image>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-2 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col md:order-1 order-2'>
                    <h1 className='font-bold underline'> Finance Director </h1>
                    <p> <span className='font-bold'> Name: </span>  Cynthia Kim </p>
                    <p> <span className='font-bold'> Email: </span> ckim@ucdavis.edu </p>
                    <p> <span className='font-bold'> Phone Number: </span> (123) 111-2223 </p>
                </div>
                <Image className="my-auto order-1" src={require("../../../assets/finance.png")} width={120}></Image>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-2 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col md:order-1 order-2'>
                    <h1 className='font-bold underline'> Case Management Co-Director </h1>
                    <p> <span className='font-bold'> Name: </span> Mandy Lau  </p>
                    <p> <span className='font-bold'> Email: </span> mlau@ucdavis.edu </p>
                    <p> <span className='font-bold'> Phone Number: </span> (123) 111-2224 </p>
                </div>
                <Image className="my-auto order-1" src={require("../../../assets/case-management.png")} width={120}></Image>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-2 px-6 items-center bg-white rounded-2xl font-montserrat mb-4">
                <div className='flex flex-col md:order-1 order-2'>
                    <h1 className='font-bold underline'> Staff Co-Director </h1>
                    <p> <span className='font-bold'> Name: </span> Adam Wilson  </p>
                    <p> <span className='font-bold'> Email: </span> awilson@ucdavis.edu </p>
                    <p> <span className='font-bold'> Phone Number: </span> (123) 111-2225 </p>
                </div>
                <Image className="my-auto order-1" src={require("../../../assets/staff.png")} width={120}></Image>
            </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default ImportantContacts;

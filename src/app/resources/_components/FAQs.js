import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import Image from 'next/image';

const FAQs = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full bg-beige flex flex-col gap-4 px-4 pt-4 rounded-2xl">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleCollapse}>
        <div className='flex flex-row gap-2 items-center'>
            <Image src={require("../../../assets/faq.png")} width={40}></Image>
            <h2 className="text-xl font-josefin_sans text-grey">FAQS</h2>
        </div>
        <button className="arrow-button text-white" onClick={toggleCollapse}>
          {isCollapsed ? <span>&#9660;</span> : <span>&#9650;</span>}
        </button>
      </div>
      <Collapsible trigger="" open={isCollapsed}>
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col'>
                    <p className='font-bold'> Q: There is a late resident who has not informed 
                    a Board Member where they are or when they will return, what should I do?</p>
                    <p> <span className='font-bold'>A: </span>The first thing you should do is contact one of our Case Management Directors (Mandy or Sally) 
                        informing them of the situation so they can reach out to the resident director.</p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat">
                <div className='flex flex-col'>
                    <p className='font-bold'> Q: What chores should I complete?</p>
                    <p> <span className='font-bold'>A: </span>The chore calendar chart is located in the ‘To-do’ tab, once you complete all 
                    chores for the designated day, make sure to leave a checkmark.</p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:justify-between py-6 px-6 items-center bg-white rounded-2xl font-montserrat mb-4">
                <div className='flex flex-col'>
                    <p className='font-bold'> Q: I cannot make a shift, what do I do?</p>
                    <p> <span className='font-bold'>A: </span>If you know you cannot make a shift 48 hrs in advance, you are responsible for 
                    contacting the back-up volunteer and coordinating with them. Even if you cancel last minute, you should try your best to find a back-up. 
                    If that is not possible, please let a Staff Director (Adam or May) know as soon as possible.</p>
                </div>
            </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default FAQs;
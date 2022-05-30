import React from 'react'

function Landing() {
  return (
    <>
        <div className='mt-[10.5rem] flex flex-col items-center'>
            <h1 className='text-[85px] text-center w-[770px] font-bold '>
            Bringing you a World of <span className='text-violet'>Data</span>
            </h1>
            <p className='mt-[2rem] w-[530px] font-sans text-center font-[16.76px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className='mt-[5rem] '>
                <button  type='button' className='px-[2.4rem] py-[0.836rem] font-bold text-[20.71px] font-sans border-2 border-[#8480FF] rounded-[4.77487px]'>Learn More</button>
            </div>
        </div>
    </>
  )
}

export default Landing
import React from 'react'

import styles from '../../styles/insights.module.css'

function Landing() {
  return (
    <>
        <div className='mt-[10.5rem]  flex flex-col items-center'>
          <span className={styles.bag}>
          <></>
          </span>
            <h1 className='text-[85px] text-center w-[770px] font-bold leading-[85.11px]  tracking-[1.4661px]'>
            Bringing you a World of <span className='text-violet'>Data</span>
            </h1>
            <p className='mt-[2rem] w-[530px] leading-[27px] tracking-[0.471615px] text-center font-[16.76px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className='mt-[5rem] mb-[15.484375rem] '>
                <button  type='button' className='px-[2.4rem] py-[0.836rem] font-bold text-[20.71px]  border-2 border-[#8480FF] rounded-[4.77487px]'>Learn More</button>
            </div>
        </div>
    </>
  )
}

export default Landing
import React from 'react'

import styles from '../../styles/insights.module.css'
import Dotted from './Dotted'
import Cards from './Stats/Cards'

function Stats() {
  return (
    <div className='mt-[11.8125rem]'>
      <div className='relative'>
        <Dotted />
      </div>
        <div className={styles.stats}>
            <h4 className='text-[42px] font-bold leading-[48px] tracking-[-1.20878px]'>Stats</h4>
            <p className='text-[16px] w-[600px] leading-[34px] stats-p font-normal mt-[1.375rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <Cards />
            
        </div>
    </div>
  )
}

export default Stats
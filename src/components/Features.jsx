import React from 'react'

import FeatureOne from './Features/FeatureOne'

import FeatureThree from './Features/FeatureThree'

import FeatureTwo from './Features/FeatureTwo'

function Features() {
  return (
    <div className='text-center  bg-dark pt-[7.75rem] pb-[11.625rem]'>
        <h3 className='font-bold text-[38.4px] tracking-[-0.64px]'>Features</h3>
        <p className='mt-[5.75px] font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
    </div>
  )
}

export default Features
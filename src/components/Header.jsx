import React from 'react'

import Logo from './Navbar/Logo'

import Navlinks from './Navbar/Navlinks'

function Header() {

  return (
    <header className=' mb-[2.1875rem] '>
        <div className='flex mx-[7.0575rem]  '>   
            <Logo />
            <Navlinks />
        </div>
    </header>
  )
}

export default Header
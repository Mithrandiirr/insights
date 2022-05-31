import React from 'react'
import Link from 'next/link'
import styles from '../../styles/insights.module.css'
import LogoFooter from './Footer/LogoFooter'

function Footer() {
  return (
    <div>
        <div className='flex mx-[7.0575rem] mb-[75px] mt-[74px] '>
            <LogoFooter />
            <nav className='flex-1 self-center ' id={styles.navbar}>
        <div className='flex flex-row justify-end  text-base'>
            <ul className='flex flex-row gap-[3.875rem]   items-center mr-[4.8125rem]'>
                <li><Link href='/features'><a>Features</a></Link></li>
                <li><Link href='/stats'><a>Stats</a></Link></li>
                <li><Link href='/faq'><a>Frequently Asked Questions</a></Link></li>
            </ul>
        </div>
    </nav>
        </div>
    </div>
  )
}

export default Footer
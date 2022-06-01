/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../../styles/insights.module.css'
import LogoFooter from './Footer/LogoFooter'

function Footer() {
    const [isFAQ,setFAQ] = React.useState(false)
    React.useEffect(()=> {
        if (typeof window !== 'undefined') {
        window.addEventListener('resize', ()=> {
           if(window.innerWidth < '850')
           {
            setFAQ(true)
           }
           else 
           setFAQ(false)
        })
    }
     }, [])
     const Feature = () =>
     {
        document.querySelector('#sectionPage').scrollIntoView({ 
            behavior: 'smooth' 
          });
     }
     const Stats = () =>
     {
        document.querySelector('#statsPage').scrollIntoView({ 
            behavior: 'smooth' 
          });
     }
     const FAQ = () =>
     {
        document.querySelector('#faqPage').scrollIntoView({ 
            behavior: 'smooth' 
          });
     }
  return (
    <div>
        <div className='flex mx-[7.0575rem] mb-[75px] mt-[74px] footer'>
            <LogoFooter />
            <nav className='flex-1 self-center ' id={styles.navbarFooter}>
        <div className='flex flex-row justify-end  text-base'>
            <ul className='flex flex-row gap-[3.875rem] footer-links  items-center mr-[4.8125rem]'>
            <li ><button type='button' onClick={Feature}>Features</button></li>
            <li ><button type='button' onClick={Stats}>Stats</button></li>
                <li ><button type='button' onClick={FAQ}>
                    
                    {isFAQ ? "FAQ" :"Frequently Asked Questions"}
                    </button></li>
            </ul>
        </div>
    </nav>
        </div>
    </div>
  )
}

export default Footer
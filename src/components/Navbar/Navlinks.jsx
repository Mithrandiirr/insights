/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import styles from '../../../styles/insights.module.css'


function Navlinks() {
    const [isMobile,setMobile] = React.useState(false)
    const [isFAQ,setFAQ] = React.useState(false)

    const handleClick = () =>
    {
        setMobile(!isMobile)
       
    }
    React.useEffect(()=> {
        if (typeof window !== 'undefined') {
        window.addEventListener('resize', ()=> {
           if(window.innerWidth < '1170')
           {
            setFAQ(true)
           
           }
           else 
           setFAQ(false)
        })
    }
     }, [])
     React.useEffect(()=>
     {
        const footer = document.getElementById('footer')           
        const header = document.getElementById('landingPage')
        const section = document.getElementById('sectionPage')
        const faq = document.getElementById('faqPage')
        const stats = document.getElementById('statsPage')
         if(isMobile)
         {
           
            header.style.display = 'none'
            section.style.display = 'none'
            faq.style.display = 'none'
            stats.style.display = 'none'
            footer.style.marginTop = '30rem'
         }
         else 
         {
            header.style.display = 'block'
            section.style.display = 'block'
            faq.style.display = 'block'
            stats.style.display = 'block'
            footer.style.marginTop = '0'
         }
     },[isMobile])
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
      <>
    <nav className='flex-1 self-center mt-[3.75rem]' id={styles.navbar}>
        <div className='flex flex-row justify-end  text-base font-medium leading-[24px] tracking-[-0.16px]'>
            <ul className='flex flex-row gap-[3.875rem]   items-center mr-[4.8125rem]'>
                <li><button type='button' onClick={Feature} >Features</button></li>
                <li><button type='button' onClick={Stats} >Stats</button></li>
                <li>
                <button href='#faqPage'
                type='button' onClick={FAQ}
                >
                {isFAQ ?
                "FAQ" : "Frequently Asked Questions"
                }
               
                </button>
                </li>
            </ul>
            <div>
                <button  type='button' className='bg-blue px-[1.125rem] py-[0.6875rem] text-[16px] leading-[24px] font-bold rounded'>
                    Purchase Now
                </button>
            </div>
        </div>
    </nav>

 <nav className='flex-1 self-center mt-[3.75rem]  ' id={styles.mobileNavbar}>
     {!isMobile
        ?
        (
        <svg onClick={handleClick} className='cursor-pointer float-right'  width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.53121 10.8095H47.4687C48.3139 10.8095 48.9999 10.1234 48.9999 9.27828C48.9999 8.433 48.3138 7.74707 47.4687 7.74707H1.53121C0.686053 7.74707 0 8.433 0 9.27828C0 10.1236 0.686053 10.8095 1.53121 10.8095Z" fill="white"/>
            <path d="M47.4687 23.0596H1.53121C0.685926 23.0596 0 23.7456 0 24.5908C0 25.4359 0.686053 26.122 1.53121 26.122H47.4687C48.3139 26.122 48.9999 25.4359 48.9999 24.5908C48.9999 23.7456 48.3139 23.0596 47.4687 23.0596Z" fill="white"/>
            <path d="M47.4687 38.3721H1.53121C0.685926 38.3721 0 39.0581 0 39.9033C0 40.7486 0.686053 41.4345 1.53121 41.4345H47.4687C48.3139 41.4345 48.9999 40.7484 48.9999 39.9033C49 39.058 48.3139 38.3721 47.4687 38.3721Z" fill="white"/>
        </svg>
        )
        :
        (
        <svg onClick={handleClick} className='cursor-pointer float-right' width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.9177 39.7273L9.43501 7.2446C8.8373 6.64689 7.86717 6.64698 7.26955 7.2446C6.67184 7.84231 6.67193 8.81244 7.26955 9.41006L39.7522 41.8927C40.3498 42.4904 41.32 42.4904 41.9177 41.8927C42.5154 41.295 42.5153 40.3249 41.9177 39.7273Z" fill="white"/>
            <path d="M39.7519 7.28872L7.26925 39.7714C6.67155 40.3691 6.67164 41.3392 7.26925 41.9369C7.86687 42.5345 8.83709 42.5345 9.43471 41.9369L41.9174 9.45417C42.5151 8.85647 42.515 7.88633 41.9174 7.28872C41.3198 6.6911 40.3496 6.69101 39.7519 7.28872Z" fill="white"/>
        </svg>
        )
    }



      
    </nav>
    {isMobile &&
    (
        <div className='hidden navlinks top-[220px] absolute mx-[24px] font-medium trackng-[-0.16 px]'>
          
        <ul className='text-[24px] leading-[24px] ' >
                 <li className='mb-[64px]'><button type='button' onClick={Feature} >Features</button></li>
                <li className='mb-[64px]'><button type='button' onClick={Stats} >Stats</button></li>
            <li className='mb-[64px]'><button type='button' onClick={Feature}>Frequently Asked Questions</button></li>
        </ul>
        
    </div>
    )
    }
    </>

  )
}

export default Navlinks
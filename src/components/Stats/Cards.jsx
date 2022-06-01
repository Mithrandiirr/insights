import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

function Cards() {
    const [emblaRef] = useEmblaCarousel()
  return (
    <div className='mt-[5.190625rem] mb-[3rem]'>
        <div className='flex flex-row justify-center gap-[4.343125rem] cards'>
            <div className='w-[266.24px] h-[257.87px]  bg-card rounded-[8.93691px] pt-[4.9375rem] px-[2.5625rem]'>
                <h1 className='text-[#AE52F7] tracking-[-1.20878px] text-[58.02px] font-bold leading-[44.32px] font-ibm'>100K+</h1>
                <p className='text-[14px] leading-[20px] opacity-75 font-normal mt-[15.44px]'>NFT’s Monitored</p>
                <button className='mt-[2.3475rem] mb-[1.304375rem] items-center font-bold flex flex-row gap-[16.4px] text-[14.79px] leading-[39px]' type='button'>Learn More 
                     <span>
                         <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66852 4.49313C5.66852 4.65418 5.60526 4.81521 5.47902 4.93799L1.50445 8.80186C1.25162 9.04765 0.841691 9.04765 0.588962 8.80186C0.336232 8.55617 0.336232 8.15774 0.588962 7.91193L4.10588 4.49313L0.589084 1.07431C0.336354 0.828515 0.336354 0.430124 0.589084 0.184451C0.841814 -0.0614605 1.25174 -0.0614605 1.50457 0.184451L5.47914 4.04826C5.60541 4.1711 5.66852 4.33214 5.66852 4.49313Z" fill="white"/>
                        </svg>
                    </span>
                </button>
            </div>

            <div className='w-[295.27px] h-[285.98px] mt-[-14.05px] bg-card rounded-[8.93691px] pt-[5.475625rem] px-[2.841875rem]'>
            <h1 className='text-[#52CFF7] tracking-[-1.34054px] text-[64.35px] font-bold leading-[49.15px] font-ibm'>$30K+</h1>
            <p className='text-[15.53px] leading-[22px] opacity-75 font-normal mt-[15.44px]'>Profits Generated</p>
            <button className='mt-[41.91px] mb-[22.4px] items-center font-bold flex flex-row gap-[16.4px] text-[16.4018px] leading-[43px]' type='button'>Learn More 
                     <span>
                         <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66852 4.49313C5.66852 4.65418 5.60526 4.81521 5.47902 4.93799L1.50445 8.80186C1.25162 9.04765 0.841691 9.04765 0.588962 8.80186C0.336232 8.55617 0.336232 8.15774 0.588962 7.91193L4.10588 4.49313L0.589084 1.07431C0.336354 0.828515 0.336354 0.430124 0.589084 0.184451C0.841814 -0.0614605 1.25174 -0.0614605 1.50457 0.184451L5.47914 4.04826C5.60541 4.1711 5.66852 4.33214 5.66852 4.49313Z" fill="white"/>
                        </svg>
                    </span>
            </button>
            </div>

            <div className='z-10 w-[266.24px] h-[257.87px]  bg-card rounded-[8.93691px] pt-[4.9375rem] px-[2.5625rem]'>
            <h1 className='text-[#52F7E3] tracking-[-1.20878px] text-[58.02px] font-bold leading-[44.32px] font-ibm'>300+</h1>
            <p className='text-[14px] leading-[20px] opacity-75 font-normal mt-[15.44px]'>Monthly Users</p>
            <button className='mt-[2.3475rem] mb-[1.304375rem] items-center font-bold flex flex-row gap-[16.4px] text-[14.79px] leading-[39px]' type='button'>Learn More 
                     <span>
                         <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66852 4.49313C5.66852 4.65418 5.60526 4.81521 5.47902 4.93799L1.50445 8.80186C1.25162 9.04765 0.841691 9.04765 0.588962 8.80186C0.336232 8.55617 0.336232 8.15774 0.588962 7.91193L4.10588 4.49313L0.589084 1.07431C0.336354 0.828515 0.336354 0.430124 0.589084 0.184451C0.841814 -0.0614605 1.25174 -0.0614605 1.50457 0.184451L5.47914 4.04826C5.60541 4.1711 5.66852 4.33214 5.66852 4.49313Z" fill="white"/>
                        </svg>
                    </span>
            </button>
            </div>
        </div>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
            <div className='w-[266.24px] h-[257.87px]  bg-card rounded-[8.93691px] pt-[4.9375rem] px-[2.5625rem]'>
                <h1 className='text-[#AE52F7] tracking-[-1.20878px] text-[58.02px] font-bold leading-[44.32px] font-ibm'>100K+</h1>
                <p className='text-[14px] leading-[20px] opacity-75 font-normal mt-[15.44px]'>NFT’s Monitored</p>
                <button className='mt-[2.3475rem] mb-[1.304375rem] items-center font-bold flex flex-row gap-[16.4px] text-[14.79px] leading-[39px]' type='button'>Learn More 
                     <span>
                         <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66852 4.49313C5.66852 4.65418 5.60526 4.81521 5.47902 4.93799L1.50445 8.80186C1.25162 9.04765 0.841691 9.04765 0.588962 8.80186C0.336232 8.55617 0.336232 8.15774 0.588962 7.91193L4.10588 4.49313L0.589084 1.07431C0.336354 0.828515 0.336354 0.430124 0.589084 0.184451C0.841814 -0.0614605 1.25174 -0.0614605 1.50457 0.184451L5.47914 4.04826C5.60541 4.1711 5.66852 4.33214 5.66852 4.49313Z" fill="white"/>
                        </svg>
                    </span>
                </button>
            </div>
            <div className='w-[295.27px] h-[285.98px] mt-[-14.05px] bg-card rounded-[8.93691px] pt-[5.475625rem] px-[2.841875rem]'>
            <h1 className='text-[#52CFF7] tracking-[-1.34054px] text-[64.35px] font-bold leading-[49.15px] font-ibm'>$30K+</h1>
            <p className='text-[15.53px] leading-[22px] opacity-75 font-normal mt-[15.44px]'>Profits Generated</p>
            <button className='mt-[41.91px] mb-[22.4px] items-center font-bold flex flex-row gap-[16.4px] text-[16.4018px] leading-[43px]' type='button'>Learn More 
                     <span>
                         <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66852 4.49313C5.66852 4.65418 5.60526 4.81521 5.47902 4.93799L1.50445 8.80186C1.25162 9.04765 0.841691 9.04765 0.588962 8.80186C0.336232 8.55617 0.336232 8.15774 0.588962 7.91193L4.10588 4.49313L0.589084 1.07431C0.336354 0.828515 0.336354 0.430124 0.589084 0.184451C0.841814 -0.0614605 1.25174 -0.0614605 1.50457 0.184451L5.47914 4.04826C5.60541 4.1711 5.66852 4.33214 5.66852 4.49313Z" fill="white"/>
                        </svg>
                    </span>
            </button>
            </div>
            <div className='z-10 w-[266.24px] h-[257.87px]  bg-card rounded-[8.93691px] pt-[4.9375rem] px-[2.5625rem]'>
            <h1 className='text-[#52F7E3] tracking-[-1.20878px] text-[58.02px] font-bold leading-[44.32px] font-ibm'>300+</h1>
            <p className='text-[14px] leading-[20px] opacity-75 font-normal mt-[15.44px]'>Monthly Users</p>
            <button className='mt-[2.3475rem] mb-[1.304375rem] items-center font-bold flex flex-row gap-[16.4px] text-[14.79px] leading-[39px]' type='button'>Learn More 
                     <span>
                         <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66852 4.49313C5.66852 4.65418 5.60526 4.81521 5.47902 4.93799L1.50445 8.80186C1.25162 9.04765 0.841691 9.04765 0.588962 8.80186C0.336232 8.55617 0.336232 8.15774 0.588962 7.91193L4.10588 4.49313L0.589084 1.07431C0.336354 0.828515 0.336354 0.430124 0.589084 0.184451C0.841814 -0.0614605 1.25174 -0.0614605 1.50457 0.184451L5.47914 4.04826C5.60541 4.1711 5.66852 4.33214 5.66852 4.49313Z" fill="white"/>
                        </svg>
                    </span>
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards
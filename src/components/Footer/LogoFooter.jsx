/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Link from "next/link";

function LogoFooter() {
  return (
    <div >
        <Link href='/'>
        <a className='flex flex-row items-center gap-[1.91rem] ' >
        <svg width="63" height="50" viewBox="0 0 63 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3446 35.004L23.0845 33.0892L17.7207 36.4253L18.9808 38.3401L24.3446 35.004Z" fill="#1C164F"/>
            <path d="M40.6294 42.909C52.6214 42.909 62.3429 33.4582 62.3429 21.8001C62.3429 10.142 52.6214 0.691284 40.6294 0.691284C28.6374 0.691284 18.916 10.142 18.916 21.8001C18.916 33.4582 28.6374 42.909 40.6294 42.909Z" fill="url(#paint0_linear_2_2860)"/>
            <path d="M40.6294 4.34415C45.4263 4.34415 49.9356 6.15942 53.3268 9.45746C56.7181 12.7555 58.5866 17.138 58.5866 21.8013C58.5866 26.4646 56.7193 30.8483 53.3268 34.1452C49.9343 37.442 45.4263 39.2585 40.6294 39.2585C35.8326 39.2585 31.3233 37.4432 27.9321 34.1452C24.5408 30.8471 22.6723 26.4646 22.6723 21.8013C22.6723 17.138 24.5396 12.7543 27.9321 9.45746C31.3246 6.1606 35.8326 4.34415 40.6294 4.34415ZM40.6294 0.691284C28.6379 0.691284 18.916 10.1424 18.916 21.8001C18.916 33.4578 28.6379 42.909 40.6294 42.909C52.621 42.909 62.3429 33.4578 62.3429 21.8001C62.3429 10.1424 52.621 0.691284 40.6294 0.691284Z" fill="url(#paint1_linear_2_2860)"/>
            <path d="M40.6295 16.3626C43.396 16.3626 46.4054 18.407 48.4418 20.1212C48.9905 20.5829 49.2927 21.1786 49.2927 21.799C49.2927 22.4194 48.9905 23.0151 48.4418 23.4768C46.4054 25.1922 43.3972 27.2354 40.6295 27.2354C37.8619 27.2354 34.8537 25.191 32.8172 23.4768C32.2685 23.0151 31.9664 22.4194 31.9664 21.799C31.9664 21.1786 32.2685 20.5829 32.8172 20.1212C34.8537 18.4058 37.8619 16.3626 40.6295 16.3626ZM40.6295 14.5367C37.3216 14.5367 33.9449 16.7562 31.5881 18.7418C29.5891 20.4255 29.5891 23.176 31.5881 24.8597C33.9461 26.8453 37.3216 29.0648 40.6295 29.0648C43.9374 29.0648 47.3142 26.8453 49.671 24.8597C51.67 23.176 51.67 20.4255 49.671 18.7418C47.313 16.7562 43.9374 14.5367 40.6295 14.5367Z" fill="#685BFE"/>
            <path d="M43.002 21.8C43.002 23.0737 41.9396 24.1064 40.6295 24.1064C39.3194 24.1064 38.2571 23.0737 38.2571 21.8C38.2571 20.5264 39.3194 19.4937 40.6295 19.4937C41.9396 19.4937 43.002 20.5264 43.002 21.8Z" fill="#DB52F7"/>
            <path d="M18.7296 39.6664C19.731 39.0436 20.0236 37.7497 19.3831 36.7765C18.7426 35.8032 17.4116 35.5192 16.4102 36.142L1.81326 45.2207C0.811871 45.8435 0.519299 47.1374 1.15978 48.1106C1.80026 49.0838 3.13125 49.3679 4.13263 48.7451L18.7296 39.6664Z" fill="#35308E"/>
            <defs>
            <linearGradient id="paint0_linear_2_2860" x1="25.2756" y1="6.87378" x2="55.1164" y2="37.5693" gradientUnits="userSpaceOnUse">
            <stop stopColor="#242170"/>
            <stop offset="1" stopColor="#1C164F"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2_2860" x1="25.2756" y1="6.87378" x2="55.1164" y2="37.5693" gradientUnits="userSpaceOnUse">
            <stop stopColor="#35308E"/>
            <stop offset="1" stopColor="#2D2573"/>
            </linearGradient>
            </defs>
        </svg>
        <div className='flex flex-col'>
        <span className='font-bold text-white text-2xl leading-6 font-ibm'>
            0xInsights
        </span>
        <span className='text-p mt-[6px] text-[12px] leading-[24px] font-normal tracking-[-0.16px]'>
        Copyright 0xInsights 2022
        </span>
        </div>
        </a>
        </Link>
    </div>
  )
}

export default LogoFooter
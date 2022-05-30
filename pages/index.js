import Head from 'next/head'

import styles from '../styles/insights.module.css'

import Header from '../src/components/Header'

import Landing from '../src/components/Landing'

export default function Home() {
  return (
<div className='max-w-[1920px] mx-auto'>
      <Head>
         <title>0xInsights - Home</title>
      </Head>
      <div className={styles.front}>
      <section className={styles.header}>
      <Header  />
      </section>
      <section className=''>
      <Landing />
      </section>
      </div>

</div>

  )
}

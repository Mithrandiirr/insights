import Head from 'next/head'
import styles from '../styles/insights.module.css'
import Header from '../src/components/Header'
import Landing from '../src/components/Landing'
import Features from '../src/components/Features'
import Stats from '../src/components/Stats'
import FAQ from '../src/components/FAQ'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
<div className='max-w-[1920px] mx-auto'>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta charSet="utf-8" />
         <title>0xInsights - Home</title>
         <link rel="shortcut icon" sizes="32x32" href="/favicon_32.png" />
         <link rel="shortcut icon" sizes="24x24" href="/favicon_24.png" />
         <meta property="og:image" content="/preview.png" />
      </Head>
      <div id='headerImage' className={styles.front}>
      <section  className={styles.header}>
      <Header  />
      </section>
      <section id='landingPage'>
      <Landing />
      </section>
      </div>
      <section id='sectionPage'>
      <Features  />
      </section>
      <section id='statsPage'>
        <Stats />
      </section>
      <section id='faqPage'>
      <FAQ />
      </section>
      <footer id='footer' className={styles.footer}>
        <Footer />
      </footer>
</div>

  )
}

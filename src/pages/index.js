import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import BannerSection from '@/components/banner'
import AboutSection from '@/components/About'
import SocialLinks from '@/components/NavLeft'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head> 
      <title>Carms Portfolio</title>
      
    </Head>
      <NavBar/>
      <BannerSection/>
      <AboutSection/>

      <SocialLinks/>
    </>
  )
}

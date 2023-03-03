import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'

const inter = Inter({ subsets: ['latin'] })

export default function GridChat() {
  return (
    <>
      <Head>
        <title>Julian Atkin</title>
        <meta name="description" content="Full Stack Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        Hi 
    </>
  )
}

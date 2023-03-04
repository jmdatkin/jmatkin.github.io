import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import Animated from '@/components/Animated'
import Carousel from '@/components/Carousel'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function GridChat() {

  const carouselWrapperRef = useRef(null);

  return (
    <>
      <Animated>
        <Head>
          <title>LoL Ability Quiz | Julian Atkin</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full md:border-b bg-zinc-200 gap-px [&>*]:bg-white [&>">
          <header className="p-8 py-8">
            <h1 className={`tracking-tight mb-8`}>League of Legends Ability Quiz</h1>
            <div className="[&>*]:mb-2">
              <p>League of Legends is one of my most-played games.</p>
              <p>It has 162 (at the time of writing this) unique characters, each with four distinct abilities, resulting in a total of 648 abilities to memorize.</p>
              <p>One day, I was wondering to myself how many of these abilities I actually knew the name for. I thought testing this would be a fun challenge for League players, since learning the names of these abilities is not strictly required to play the game.</p>
            </div>
          </header>
          <section ref={carouselWrapperRef} className="min-h-[500px] md:h-full">
            <Carousel wrapper={carouselWrapperRef} imagePaths={['/projects/lol-ability-quiz/1.png', '/projects/lol-ability-quiz/2.png', '/projects/lol-ability-quiz/3.png']}></Carousel>
          </section>
          <section className="w-full p-6 flex flex-col">
            <h3 className="mb-4">Built With</h3>
            <div className="mb-4 flex flex-col">
              <h4>Next.js</h4>
              <span>Data fetching and loading</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Cheerio</h4>
              <span>Web scraping library</span>
              <span>Facilitates data scraping from League of Legends Wiki</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Vercel Hosting</h4>
              <span>Make app publicly accessible</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Tailwind CSS</h4>
              <span>Style UI elements</span>
            </div>
          </section>
          <section className="">
            <Link target="_blank" href="https://lol-ability-quiz.vercel.app/" className="w-full h-full cursor-pointer bg-white block hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm duration-[0.07s]">
            <div className="w-full h-full flex flex-col p-6 items-center justify-around">
              <div className="flex flex-col">
              <span>Launch App</span>
              <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
              </div>
            </div>
            </Link>
          </section>
        </div>
      </Animated>
    </>
  )
}

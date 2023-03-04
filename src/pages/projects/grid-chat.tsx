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
          <title>Grid Chat | Julian Atkin</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full md:border-b bg-zinc-200 gap-px [&>*]:bg-white [&>">
          <header className="p-8 py-8">
            <h1 className={`tracking-tight mb-8`}>Grid Chat</h1>
            <div className="[&>*]:mb-2">
              <p>I had the idea for this app back in 2016, when I first started building interactive web apps.</p>
              <p>I wanted to build a space for users to hold discussions that have an element of physical location. The idea is, as a discussion goes on, users can see its history represented in the path it followed as more messages were added.</p>
              <p>It also permits the more nuanced aspects of conversation to become represented visually: a heated discussion might consist of dense, tightly-packed messages, as if trying to speak over each other. A light, whimsical conversation might have users venturing out, exploring new ideas and daring to lead the conversation further into the void.</p>
              <p>As you zoom out, the context shifts: larger threads of conversation become apparent.</p>
              <p>Maybe you notice an isolated message somebody left in a place they thought nobody would ever read it.</p>
            </div>
          </header>
          <section ref={carouselWrapperRef} className="h-[500px] md:h-full">
            <Carousel wrapper={carouselWrapperRef}  imagePaths={['/projects/grid-chat/1.png', '/projects/grid-chat/2.png']}></Carousel>
          </section>
          <section className="w-full p-6 flex flex-col">
            <h3 className="mb-4">Built With</h3>
            <div className="mb-4 flex flex-col">
              <h4>React.js</h4>
              <span></span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Firebase Realtime Database</h4>
              <span>Real-time key/value database</span>
              <span>App subscribes to changes in data, draws new data on-screen</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Tailwind CSS</h4>
              <span>Style UI elements</span>
            </div>
          </section>
          <section className="">
            <Link target="_blank" href="https://grid-chat-app.web.app/" className="w-full h-full cursor-pointer bg-white block hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm duration-[0.07s]">
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

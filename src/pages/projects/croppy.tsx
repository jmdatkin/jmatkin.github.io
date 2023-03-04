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
          <title>Croppy | Julian Atkin</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-full md:border-b bg-zinc-200 gap-px [&>*]:bg-white [&>">
          <header className="p-8 py-8">
            <h1 className={`tracking-tight mb-8`}>Croppy</h1>
            <div className="[&>*]:mb-2">
              <p>Croppy is a streamlined image editing experience on the web.</p>
              <p>It carries out many of the core tasks of advanced image editing software like Photoshop, but without the bloat of a desktop application.</p>
              <p>It's designed for digital media power users needing to crop images to a specific size for display on the web.</p>
            </div>
          </header>
          <section ref={carouselWrapperRef} className="min-h-[500px] md:h-full">
            <Carousel wrapper={carouselWrapperRef} imagePaths={['/projects/croppy/1.png', '/projects/croppy/2.png']}></Carousel>
          </section>
          <section className="w-full p-6 flex flex-col">
            <h3 className="mb-4">Built With</h3>
            <div className="mb-4 flex flex-col">
              <h4>Vue.js</h4>
              <span></span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Sharp</h4>
              <span>JavaScript image processing library</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Firebase Firestore</h4>
              <span>Store parameter presets and cropped images</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Vercel Serverless Functions</h4>
              <span>Execute image processing tasks</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Tailwind CSS</h4>
              <span>Style UI elements</span>
            </div>
          </section>
          <section className="">
            <Link target="_blank" href="https://croppy.vercel.app/" className="w-full h-full cursor-pointer bg-white block hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm duration-[0.07s]">
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

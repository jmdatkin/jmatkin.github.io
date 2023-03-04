import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import Animated from '@/components/Animated'
import Carousel from '@/components/Carousel'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function GridChat() {

  const carouselWrapperRef = useRef(null);

  return (
    <>
      <Animated>
        <Head>
          <title>Fake Instagram Post Generator | Julian Atkin</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[500px] md:min-h-full md:border-b bg-zinc-200 gap-px [&>*]:bg-white [&>">
          <header className="p-8 py-8">
            <h1 className={`tracking-tight mb-8`}>Fake Instagram Post Generator</h1>
            <div className="[&>*]:mb-2">
              <p>Generate a screenshot of an Instagram post with user-generated content.</p>
              <p>Created this because I wanted to try Svelte 😂 (which is awesome)</p>
            </div>
          </header>
          <section ref={carouselWrapperRef} className="min-h-[500px] md:h-full">
            <Carousel wrapper={carouselWrapperRef}  imagePaths={['/projects/fake-instagram-post-generator/1.png', '/projects/fake-instagram-post-generator/2.png']}></Carousel>
          </section>
          <section className="w-full p-6 flex flex-col">
            <h3 className="mb-4">Built With</h3>
            <div className="mb-4 flex flex-col">
              <h4>Svelte</h4>
              <span></span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>html2canvas</h4>
              <span>Render HTML elements as a downloadable image</span>
            </div>
            <div className="mb-4 flex flex-col">
              <h4>Vercel Hosting</h4>
              <span>Make app publicly accessible</span>
            </div>
          </section>
          <section className="">
            <Link target="_blank" href="https://fake-instagram-post-generator.vercel.app/" className="w-full h-full cursor-pointer bg-white block hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm duration-[0.07s]">
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

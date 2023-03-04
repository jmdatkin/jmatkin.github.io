import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import Animated from '@/components/Animated'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
        <Animated>
            <Head>
                <title>Julian Atkin</title>
                <meta name="description" content="Full Stack Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="p-6 py-8 mb-6">
                <h1 className={`tracking-tight`}>Resume</h1>
            </header>
            {/* <div className="p-6">
                <p>I grew up in Bayside, Queens.</p>
                <p>What excites me about programming is the thrill and satisfaction of inventing something new.</p>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border-b">
                <section className="md:border-r">
                    <h3 className="p-6 ">Experience</h3>
                    <div className="w-full p-6">
                       
                    </div>
                </section>
                <section className="border-t md:border-t-0">
                    <h3 className="p-6 ">Education</h3>
                    <div className="w-full p-6">
                        <p className="mb-4">
                            <strong>B.S. Computer Science</strong> - University at Albany
                        </p>
                        <ul className='space-y-1'>
                            <li>3.4 Cumulative GPA</li>
                            <li>Minor in Music</li>
           
                        </ul>

                    </div>
                </section>
            </div>
        </Animated>
        </>
    )
}

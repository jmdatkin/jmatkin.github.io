import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import Animated from '@/components/Animated'
import Link from 'next/link'

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
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b bg-zinc-200 gap-px [&>*]:bg-white">
                    <section className="">
                        <h3 className="p-6 pb-2">Work Experience</h3>
                        <div className="w-full p-6">
                            <p className="mb-4">
                                <strong>Columbia County Recovery Kitchen</strong> - Full Stack Developer<br></br>
                                Aug 2021 - Oct 2022
                            </p>
                            Designed and developed a database and admin console to manage records of 100+ meal recipients and drivers. 
                        </div>
                    </section>
                    <section className="">
                        <h3 className="p-6 pb-2">Education</h3>
                        <div className="w-full p-6">
                            <p className="mb-4">
                                <strong>B.S. Computer Science</strong> - University at Albany<br></br>
                                2017-2021
                            </p>
                            <ul className='space-y-2'>
                                <li>3.4 Cumulative GPA</li>
                                <li>Placed on Dean's List</li>
                                <li>Minor in Music</li>

                            </ul>

                        </div>
                    </section>
                    <section className="">
                        <h3 className="p-6 pb-2">Courses/Certifications</h3>
                        <div className="w-full p-6">
                            <ul className='space-y-2'>
                                <li className="hover:underline"><Link target="_blank" href="https://www.udemy.com/certificate/UC-0e59e413-7af0-4fd2-99be-df4df846e21c/">Learn and Understand NodeJS</Link></li>
                                <li className="">
                                    <Link className="hover:underline" target="_blank" href="https://triplebyte.com/tb/julian-atkin-rio5onb/certificate">Triplebyte Certificate</Link>
                                    <table className="w-full">
                                        <tbody>
                                            <tr className="border">
                                                <td className="border p-2">
                                                    Front-end
                                                </td>
                                                <td className="border p-2">
                                                    Level 5
                                                </td>
                                            </tr>
                                            <tr className="border">
                                                <td className="border p-2">
                                                    Back-end
                                                </td>
                                                <td className="border p-2">
                                                    Level 4
                                                </td>
                                            </tr>
                                            <tr className="border">
                                                <td className="border p-2">
                                                    General Coding Logic
                                                </td>
                                                <td className="border p-2">
                                                    Level 4
                                                </td>
                                            </tr>
                                            <tr className="border">
                                                <td className="border p-2">
                                                    React
                                                </td>
                                                <td className="border p-2">
                                                    Level 4
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>

                        </div>
                    </section>
                    <section className="">
                        <h3 className="p-6 pb-2">Skills</h3>
                        <div className="w-full p-6">
                            <ul className='space-y-2'>
                                <li>React.js</li>
                                <li>Vue.js</li>
                                <li>Vanilla JS</li>
                                <li>CSS</li>
                            </ul>

                        </div>
                    </section>
                </div>
            </Animated>
        </>
    )
}

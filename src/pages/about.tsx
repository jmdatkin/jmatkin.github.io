import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <Head>
                <title>Julian Atkin</title>
                <meta name="description" content="Full Stack Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="p-6 py-6 mb-6">
                <h1 className={`tracking-tight`}>About Me</h1>
            </header>
            <div className="p-6">
                <p>I grew up in Bayside, Queens.</p>
                <p>What excites me about programming is the thrill and satisfaction of inventing something new.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border-b">
                <section className="md:border-r">
                    <h3 className="p-6 ">Favorite Tech</h3>
                    <div className="w-full p-6">
                        <table>
                            <tbody>
                                <tr className="border">
                                    <td className="border p-2">
                                        Favorite app framework:
                                    </td>
                                    <td className="border p-2">
                                        Next.js
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="border p-2">
                                        Favorite front-end framework:
                                    </td>
                                    <td className="border p-2">
                                        React.js
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="border p-2">
                                        Favorite CSS framework:
                                    </td>
                                    <td className="border p-2">
                                        Tailwind CSS
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="border p-2">
                                        Favorite back-end platform:
                                    </td>
                                    <td className="border p-2">
                                        Firebase
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="border-t md:border-t-0">
                    <h3 className="p-6 ">Hobbies/Interests</h3>
                    <div className="w-full p-6">
                        <p className="mb-4">
                            Besides building awesome web experiences, I enjoy:
                        </p>

                        <ul>
                            <li>🕉 Yoga/meditation</li>
                            <li>🎧Music production</li>
                            <li>🌳Spending time in nature</li>
                            <li>🎮Online gaming (League of Legends and Old School Runescape😎)</li>
                        </ul>

                    </div>
                </section>
            </div>
        </>
    )
}

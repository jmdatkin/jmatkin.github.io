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
                    <h1 className={`tracking-tight`}>Projects</h1>
                </header>
                <section className="border-t border-b">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*]:bg-white gap-px bg-zinc-200">
                        <Project title="Grid Chat" slug="grid-chat" href="https://grid-chat-app.web.app/" tech={['React.js', 'Firebase Realtime Database', 'Tailwind CSS']}>
                            Infinite 2D spatial messaging board
                        </Project>
                        <Project title="Croppy" slug="croppy" href="https://croppy.vercel.app/" tech={['Vue.js', 'Sharp', 'Firebase Firestore', 'Vercel Serverless Functions', 'Tailwind CSS']}>
                            In-browser image cropping, resizing, and compressing tool
                        </Project>
                        <Project title="League of Legends Ability Quiz" href="https://lol-ability-quiz.vercel.app/" slug="lol-ability-quiz" tech={['Next.js', 'Cheerio', 'Vercel Hosting', 'Tailwind CSS']}>
                            Browser-based game testing knowledge of ability names in the online game League of Legends
                        </Project>
                        <Project title="Fake Instagram Post Generator" href="https://fake-instagram-post-generator.vercel.app/" slug="fake-instagram-post-generator" tech={['Svelte', 'html2canvas', 'Vercel Hosting']}>
                            Tool to generate screenshots of Instagram posts with user-generated content
                        </Project>
                        <Project title="Portfolio Site" href="/" slug="" disabled tech={['Next.js', 'Tailwind CSS']}>
                            You're looking at it!
                        </Project>
                        <div className="h-full !bg-zinc-200 flex flex-col items-center justify-around text-center">
                            <span className="text-zinc-400">
                                More amazing projects on the way!
                            </span>
                        </div>
                    </div>
                </section>
            </Animated>
        </>
    )
}

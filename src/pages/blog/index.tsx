import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import Animated from '@/components/Animated'
import { getAllPosts } from '../../../lib/api'
import Post from '@/types/post'
import Link from 'next/link'
import DateFormatter from '@/components/DateFormatter'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
    ]).map((post) => {
        return { ...post, date: JSON.stringify(post.date).replaceAll('"', '') };
    });

    return {
        props: { allPosts },
    }
}

type Props = {
    allPosts: Post[]
}

export default function Blog(props: Props) {
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
                    <h1 className={`tracking-tight`}>Blog</h1>
                </header>
                <div className="p-6">
                    <div className="flex flex-col">
                        {props.allPosts.map((post: Post) => {
                            // return <span>{post.title}</span>
                            return (
                                <div className='w-full [&:not(:last-child)]:border-b hover:bg-zinc-50 active:bg-zinc-100 duration-[0.07s]'>
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className='p-6 py-10'>
                                            <div className="flex items-center justify-between text-2xl gap-4">
                                                <h3>{post.title}</h3><span className="text-zinc-400"><DateFormatter formatString='LL-dd-yyyy' dateString={post.date}></DateFormatter></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </Animated>
        </>
    )
}

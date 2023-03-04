import Animated from "@/components/Animated";
import PostBody from "@/components/PostBody";
import Layout from "@/components/Layout";
import Post from "@/types/post";
import { m } from "framer-motion";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import PostHeader from "@/components/PostHeader";

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content'
    ]);
    const date = JSON.stringify(post.date).replaceAll('"','');
    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                date,
                content
            }
        }
    };
}

type BlogPostProps = {
    post: Post
    morePosts: Post[]
    preview?: boolean
}

function BlogPost(props: BlogPostProps) {
    return (
        <>
            <Animated>
                <Head>
                    <title>{props.post.title} | Julian Atkin</title>
                </Head>
                <div className="">
                    {/* <h1 className="text-center">{props.post.title}</h1> */}
                    <PostHeader title={props.post.title} date={props.post.date}></PostHeader>
                    <PostBody content={props.post.content}></PostBody>
                </div>
            </Animated>
        </>
    );
}

export default BlogPost;
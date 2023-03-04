import Link from "next/link";
import { ReactNode } from "react";

type ProjectProps = {
    title: string,
    slug: string,
    href: string,
    children: ReactNode,
    tech: (string | {href: string, text: string})[]
};

function Project(props: ProjectProps) {
    return (
        <article className="Project relative hover:bg-zinc-50 focus-visible:bg-zinc-100 focus-visible:outline-none focus-visible:shadow-sm  hover:z-[999] focus-visible:z-[999] active:bg-zinc-100  hover:shadow-md active:shadow-sm cursor-pointer duration-[0.07s] h-full flex flex-col">
            <Link target="_blank" href={props.href ? props.href : `/projects/${props.slug}`}><span className="mb-2 text-lg block font-semibold">{props.title}</span>
                <div>
                    <p className="mb-4 text-zinc-700 leading-tight">{props.children}</p>
                </div>
                <div>
                    {props.tech ? <>
                        <p>Built with</p>
                        <ul>
                            {props.tech.map((item, idx) => {
                                return <li key={idx}>{typeof item === 'string' ? item : <Link href={item.href}>{item.text}</Link>}</li>
                            })}
                        </ul>
                    </> : ''
                    }
                </div>
            </Link>
        </article>
    );
}

export default Project;
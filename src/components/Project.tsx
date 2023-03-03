import Link from "next/link";
import { ReactNode } from "react";

type ProjectProps = {
    title: string,
    slug: string,
    href: string,
    children: ReactNode,
    tech: string[]
};

function Project(props: ProjectProps) {
    return (
        <article className="Project relative hover:bg-zinc-50 hover:z-[999] active:bg-zinc-100 hover:shadow-md active:shadow-sm cursor-pointer duration-[0.07s] h-full flex flex-col">
            <Link target="_blank" href={props.href ? props.href : `/projects/${props.slug}`}><h4 className="mb-2 font-semibold">{props.title}</h4>
                <div>
                    <p className="mb-4 text-zinc-700 leading-tight">{props.children}</p>
                </div>
                <div>
                    {props.tech ? <>
                        <p>Built with</p>
                        <ul>
                            {props.tech.map((item, idx) => {
                                return <li key={idx}>{item}</li>
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
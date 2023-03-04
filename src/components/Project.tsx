import { faEllipsis, faHamburger, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type ProjectProps = {
    title: string,
    slug: string,
    href: string,
    disabled: boolean,
    children: ReactNode,
    tech: (string | { href: string, text: string })[]
};

function Project(props: ProjectProps) {

    const inner = function () {
        return (
            <>
                <div className="h-full w-full p-6">
                    <span className="mb-2 text-lg block font-semibold">{props.title}</span>
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

                </div>
            </>
        )
    }

    return (
        // <article className={`Project relative hover:shadow-md active:shadow-sm active:bg-zinc-100 ${!props.disabled ? 'hover:after:opacity-100' : ''} after:block after:h-full after:w-full  after:bg-zinc-700 after:absolute after:opacity-0 focus-visible:bg-zinc-100 focus-visible:outline-none hover:z-[999] focus-visible:z-[999] cursor-pointer duration-[0.07s] h-full flex flex-col`}>
        <article className={`Project relative hover:shadow-md hover:bg-zinc-50 active:shadow-sm active:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-none hover:z-[999] focus-visible:z-[999] cursor-pointer duration-[0.07s] h-full flex flex-col`}>
            {props.disabled ? inner() :
                <Link className="block w-full h-full" href={`/projects/${props.slug}`}>
                    {inner()}
                </Link>
                // <>
                //     {inner()}
                //     {<div className="w-full h-full grid grid-cols-2 absolute z-[1000]">
                //         <Link href={props.href} className="block w-full h-full bg-white hover:opacity-100 opacity-0 duration-[0.08s] border-r active:shadow-sm active:bg-zinc-100">
                //             <div className="h-full flex flex-col items-center justify-around">
                //                 <div className="flex flex-col items-center">
                //                     <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                //                     <span className="font-medium text-lg">
                //                         Launch
                //                     </span>
                //                 </div>
                //             </div>
                //         </Link>
                //         <Link href={`/projects/${props.slug}`} className="block w-full h-full bg-white hover:opacity-100 opacity-0 duration-[0.08s] border-l active:shadow-sm active:bg-zinc-100">
                //             <div className="h-full flex flex-col items-center justify-around">
                //                 <div className="flex flex-col items-center">
                //                     <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                //                     <span className="font-medium text-lg">
                //                         Details
                //                     </span>
                //                 </div>
                //             </div>
                //         </Link>
                //     </div>}
                // </>

            }
        </article >
    );
}

export default Project;
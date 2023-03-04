import { faArrowLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

type Props = {
    title: string,
    date: string,
};

function PostHeader(props: Props) {
    return (
        <header className="min-h-[24rem] p-6 flex flex-col items-center justify-around border-b relative">
            {/* <Link className="absolute left-6 top-4 text-zinc-400 hover:text-zinc-900 active:text-zinc-600 duration-[0.07s]" href="/blog">
            <FontAwesomeIcon className="text-zinc-400" icon={faChevronLeft}></FontAwesomeIcon>&nbsp;&nbsp;All Posts
            </Link> */}
            <div className="flex flex-col items-center text-center">
                <h1 className="leading-[1.15] max-w-6xl mb-4">{props.title}</h1>
                <h3 className="font-normal"><DateFormatter className="text-zinc-400" dateString={props.date}></DateFormatter></h3>
            </div>
        </header>
    );
}

export default PostHeader;
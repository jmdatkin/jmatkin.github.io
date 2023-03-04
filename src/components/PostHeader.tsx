import DateFormatter from "./DateFormatter";

type Props = {
    title: string,
    date: string,
};

function PostHeader(props: Props) {
    return (
        <header className="h-[24rem] p-6 flex flex-col items-center justify-around border-b">
            <div className="flex flex-col items-center text-center">
                <h1 className="leading-tight max-w-6xl">{props.title}</h1>
                <h3><DateFormatter className="text-zinc-500" dateString={props.date}></DateFormatter></h3>
            </div>
        </header>
    );
}

export default PostHeader;
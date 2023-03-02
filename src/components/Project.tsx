import { ReactNode } from "react";

type ProjectProps = {
    title: string,
    children: ReactNode
};

function Project(props: ProjectProps) {
    return ( 
        <article className="Project">
            <h4>{props.title}</h4>
            {props.children}
        </article>
     );
}

export default Project;
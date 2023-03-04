import styles from '@/styles/Markdown.module.css';

type PostBodyProps = {
    content: string,
}

function PostBody(props: PostBodyProps) {
    return ( 
        <div className="max-w-4xl mx-auto p-6 py-8">
            <div className={styles.markdown}  dangerouslySetInnerHTML={{__html: props.content}}></div>
        </div>
     );
}

export default PostBody;
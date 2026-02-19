import Pagination from "@/components/pagination";
import { IPagination } from "@/types/pagination";

interface PostsProps {
    posts: IPagination;
}

function Home({ posts }: PostsProps) {
    return (
        <>
            <h1 className="title">Hello</h1>

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>

            <Pagination links={posts.links} />
        </>
    )
}

export default Home;

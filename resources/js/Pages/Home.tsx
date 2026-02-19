import Pagination from "@/components/pagination";
import { IPagination } from "@/types/pagination";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

interface PostsProps {
    posts: IPagination;
}

function Home({ posts }: PostsProps) {
    const route = useRoute();
    const { flash } = usePage();
    const { component } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);
    const [flasSuchMsg, setFlashSucMsg] = useState(flash.success);

    setTimeout(() => {
        setFlashMsg(null);
        setFlashSucMsg(null)
    }, 2000);

    return (
        <>
            <Head title={component} />
            
            <h1 className="title">Hello</h1>
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {String(flashMsg)}
                </div>
            )}

            {flasSuchMsg && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {String(flasSuchMsg)}
                </div>
            )}

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        <Link href={route('posts.show', post.id)} className="text-link">Read more...</Link>
                    </div>
                ))}
            </div>

            <Pagination links={posts.links} />
        </>
    )
}

export default Home;

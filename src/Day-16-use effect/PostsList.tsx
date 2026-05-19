import React, { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default function PostsList() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    // toggle whether posts should show
    const [showPost, setShowPost] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);

            const res = await fetch("https://dummyjson.com/posts");
            const data = await res.json();

            console.log("API data:", data);

            // setPosts(data.posts);

            // only show first 6 posts
            setPosts(data.posts.slice(0, 6));

            // try to reverse order
            // setPosts(data.posts.slice(0, 6).reverse());
            // filtering smaller ids
            // setPosts(data.posts.filter((post: Post) => post.id < 10));
            setLoading(false);
        }

        fetchPosts();
    }, []);


    return (
        <div>
            <h3>Post List</h3>


            <button onClick={() => setShowPost(!showPost)}>
                {showPost ? "Hide Posts" : "Show Posts"}
            </button>
            {loading && <p>Loading...</p>}

            {showPost && (
                <ul>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <strong>
                                    {post.id}: {post.title.substring(0, 35)}
                                </strong>
                                <p>{post.body}</p>

                                {/* body preview */}
                                {/*<p>{post.body.substring(0, 70)}...</p>*/}
                            </li>
                        );
                    })}
                </ul>
            )}

            {!showPost && <p>Posts hidden </p>}
        </div>
    );
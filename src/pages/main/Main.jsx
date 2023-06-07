import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import getPost from "../../utils/getPost";

export default function Main() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setPostList(await getPost());
        }

        fetchData();
    }, []);

    return (
        <>
            <header>
                <h2>감귤마켓 피드</h2>
                <button>검색</button>
            </header>

            <main>
                <ul>
                    {postList.map((item) => {
                        return <Post item={item} />;
                    })}
                </ul>
            </main>
        </>
    );
}

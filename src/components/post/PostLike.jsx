import React from "react";

export default function PostLike(props) {
    const likes = props.heartCount;

    return <span>{likes}</span>;
}

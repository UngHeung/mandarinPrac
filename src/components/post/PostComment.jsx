import React from "react";

export default function PostComment(props) {
    const comments = props.comments;
    const commentCount = comments.length;
    return <span>{commentCount}</span>;
}

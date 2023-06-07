import React from "react";

export default function PostImage(props) {
    const src = props.image;
    return (
        <>
            <img style={{ width: 200 + "px" }} src={src} alt="" />
        </>
    );
}

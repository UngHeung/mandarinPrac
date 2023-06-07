import React from "react";
import { DEFAULT_IMAGE } from "../../constant/path";

export default function ProfileImage(props) {
    let src = props.image;

    if (src === "") {
        src = DEFAULT_IMAGE;
    }
    console.log(src);

    return (
        <>
            <img style={{ width: 50 + "px" }} src={src} alt="" />
        </>
    );
}

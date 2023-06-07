import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfileId from "./ProfileId";
import PostContent from "./PostContent";
import PostImage from "./PostImage";

export default function Post(props) {
    const user = props.item.author;

    const { item } = props;

    return (
        <li>
            <section className="profile_wrap">
                <ProfileImage image={user.image} />
                <ProfileName name={user.username} />
                <ProfileId name={user.accountname} />
            </section>

            <section className="content_wrap">
                <PostContent content={item.content} />
                <PostImage image={item.image} />
            </section>
        </li>
    );
}

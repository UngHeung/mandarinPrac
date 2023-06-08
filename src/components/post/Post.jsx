import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfileId from "./ProfileId";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import PostComment from "./PostComment";
import PostLike from "./PostLike";

export default function Post(props) {
    const user = props.item.author;

    const { item } = props;
    console.log(item);

    // item.comments []
    // heartCount item.Number

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
                <PostComment comments={item.comments} />
                <PostLike heartCount={item.heartCount} />
            </section>
        </li>
    );
}

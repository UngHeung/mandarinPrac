import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Link to="/user/login">이메일 로그인</Link>
            <span style={{ margin: 10 + "px" }}> | </span>
            <Link to="/user">회원가입</Link>
        </>
    );
}

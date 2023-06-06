import React from "react";
import loginButtonHandler from "../utils/loginButtonHandler";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();

    return (
        <form>
            <h2>로그인</h2>
            <section className="input_wrapper">
                <label htmlFor="user_email">이메일</label>
                <input type="text" id="user_email" />
                <label htmlFor="user_password">비밀번호</label>
                <input type="password" id="user_password" />
            </section>
            <section className="button_wrapper">
                <button type="button" onClick={() => dispatch(loginButtonHandler())}>
                    로그인
                </button>
                <Link to="/user">이메일로 회원가입</Link>
            </section>
        </form>
    );
}

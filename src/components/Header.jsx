import React from "react";
import logoutButtonHandler from "../utils/logoutButtonHandler";
import checkToken from "../utils/checkToken";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserName } from "../store/slices/userSlice";

export default function Header() {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const movePage = () => {
        navigate("/");
    };

    return (
        <header>
            <h1>{state.myName}</h1>
            {checkToken() && (
                <button
                    type="button"
                    onClick={() => {
                        logoutButtonHandler();
                        dispatch(setUserName("비회원"));
                        movePage();
                    }}
                >
                    로그아웃
                </button>
            )}
        </header>
    );
}

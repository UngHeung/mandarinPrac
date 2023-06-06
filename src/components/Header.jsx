import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
    const state = useSelector((state) => state.user);
    return <h1>{state.myName}</h1>;
}

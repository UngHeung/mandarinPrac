import validation from "../validation/loginValidation";
import checkToken from "./checkToken";
import { URL } from "../constant/path";

const url = URL;

export default async function loginButtonHandler() {
    const userEmail = document.querySelector("#user_email").value;
    const userPassword = document.querySelector("#user_password").value;

    if (!validation(userEmail, userPassword)) {
        return false;
    }

    const requestPath = "/user/login";
    const requestUrl = `${url}${requestPath}`;

    const userData = {
        user: {
            email: userEmail,
            password: userPassword,
        },
    };

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const json = await response.json();
    const token = json.user.token;
    localStorage.setItem("token", token);

    const hasToken = await checkToken();
    if (!hasToken) {
        return false;
    }

    console.log(`${json.user.username} 로그인`, "loginButtonHandler");
    console.log(`토큰 체크: ${hasToken}`, "loginButtonHandler");
}

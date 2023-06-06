import { URL } from "../constant/path";
import validation from "../validation/signupProfileValidation";

const url = URL;

export default async function signupButtonHandler() {
    const userEmail = document.querySelector(".email_password #user_email").value;
    const userPassword = document.querySelector(".email_password #user_password").value;
    const userName = document.querySelector("#user_name").value;
    const userId = document.querySelector("#user_id").value;
    const userIntro = document.querySelector("#user_intro").value;
    const userProfile = document.querySelector("#profile_image").src;

    if (!validation(userName, userId)) {
        return false;
    }

    const requestPath = "/user";
    const requestUrl = `${url}${requestPath}`;

    const userData = {
        user: {
            username: userName,
            email: userEmail,
            password: userPassword,
            accountname: userId,
            intro: userIntro,
            image: userProfile,
        },
    };
    console.log(requestUrl);
    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const json = await response.json();
    console.log(json, `${json.user} 회원가입`);
}

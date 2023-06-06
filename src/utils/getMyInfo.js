import { URL } from "../constant/path";

const url = URL;

export default async function getMyInfo() {
    const token = await localStorage.token;
    const bearerToken = `Bearer ${token}`;

    const requestPath = "/user/myinfo";
    const requestUrl = `${url}${requestPath}`;

    const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
            Authorization: bearerToken,
            "Content-type": "application/json",
        },
        body: JSON.stringify(),
    });

    const json = await response.json();
    console.log(json.user, "getMyInfo");

    return json.user;
}

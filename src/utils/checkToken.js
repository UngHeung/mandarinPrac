import { URL } from "../constant/path";

const url = URL;

export default async function checkToken() {
    const requestPath = "/user/checktoken";
    const requestUrl = `${url}${requestPath}`;

    const token = await localStorage.token;
    const bearerToken = `Bearer ${token}`;

    const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
            Authorization: bearerToken,
            "Content-type": "application/json",
        },
        body: JSON.stringify(),
    });

    const json = await response.json();
    const hasToken = json.isValid;

    return hasToken;
}

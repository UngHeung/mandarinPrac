import { URL } from "../constant/path";

const url = URL;

export default async function getPost() {
    const requestPath = "/post";
    const requestUrl = `${url}${requestPath}`;

    const token = localStorage.token;
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
    const postList = await json.posts;
    console.log(postList, "getPost");

    return postList;
}

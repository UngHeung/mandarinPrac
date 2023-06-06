import { URL } from "../constant/path";

const url = URL;
const uploadPath = `${url}/image/uploadfile`;

export default async function fileUploadHandler(event) {
    const formData = new FormData();
    const profileImage = event.target.files[0];

    formData.append("image", profileImage);

    const response = await fetch(uploadPath, {
        method: "POST",
        body: formData,
    });

    const json = await response.json();

    const userProfileSrc = `${url}/${json.filename}`;
    console.log(userProfileSrc);

    return userProfileSrc;
}

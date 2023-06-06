import validation from "../validation/signupValidation";
import fileUploadHandler from "./fileUploadHandler";

export default function nextButtonHandler() {
    const userEmail = document.querySelector(".email_password #user_email").value;
    const userPassword = document.querySelector(".email_password #user_password").value;

    if (!validation(userEmail, userPassword)) {
        return false;
    }

    readyForProfile();
}

function readyForProfile() {
    const uploadProfile = document.querySelector("#upload_image");

    uploadProfile.addEventListener("change", async (event) => {
        const userProfile = document.querySelector("#profile_image");
        const newSrc = await fileUploadHandler(event);

        userProfile.src = newSrc;
    });
}

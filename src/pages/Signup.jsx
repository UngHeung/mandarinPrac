import signupButtonHandler from "../utils/signupButtonHandler";
import nextButtonHandler from "../utils/nextButtonHandler";
import { DEFAULT_IMAGE } from "../constant/path";

export default function Signup() {
    const imagePathDefault = DEFAULT_IMAGE;
    const imageAltDefault = "기본 회원 이미지";

    return (
        <form>
            <h2>이메일로 회원가입</h2>
            <section className="email_password">
                <section className="input_wrapper">
                    <label htmlFor="user_email">이메일</label>
                    <input type="text" id="user_email" />
                    <label htmlFor="user_password">비밀번호</label>
                    <input type="password" id="user_password" />
                </section>
                <section className="button_wrapper button_next">
                    <button type="button" onClick={nextButtonHandler}>
                        다음
                    </button>
                </section>
            </section>

            <section className="user_profile">
                <section className="profile_wrapper">
                    <label htmlFor="upload_image">
                        <img src={imagePathDefault} alt={imageAltDefault} id="profile_image" />
                    </label>
                    <input type="file" id="upload_image" />
                    <label htmlFor="">사용자 이름</label>
                    <input type="text" id="user_name" />
                    <label htmlFor="">계정 아이디</label>
                    <input type="text" id="user_id" />
                    <label htmlFor="">소개</label>
                    <input type="text" id="user_intro" />
                </section>
                <section className="button_wrapper button_start">
                    <button type="button" onClick={signupButtonHandler}>
                        시작하기
                    </button>
                </section>
            </section>
        </form>
    );
}

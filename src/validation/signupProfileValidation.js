export default function validation(userName, userId) {
    const regId = /^[a-zA-Z0-9_,]/;
    const userNameLength = userName.length;
    const userIdLength = userId.length;

    if (!userNameLength) {
        alert("이름을 입력해주세요!");
        return false;
    }

    if (10 < userNameLength || userNameLength < 2) {
        alert("이름은 2자 이상 10자 이내여야 합니다.");
        return false;
    }

    if (!userIdLength) {
        alert("아이디를 입력해주세요!");
        return false;
    }

    if (!regId.test(userId)) {
        alert("영문, 숫자, 특수문자(,), (_)만 사용 가능합니다.");
        return false;
    }

    return true;
}

export default function validation(userName, userId) {
    const regId = /^[A-Za-z0-9_,]/;
    const userNameLength = userName.length;
    const userIdLength = userId.length;

    if (regId.test(userId)) {
        alert("아이디는 영문, 숫자, 특수문자(,), (_)만 사용 가능합니다.");
    }

    if (!userNameLength) {
        alert("이름을 입력해주세요!");
        return false;
    }

    if (10 < userNameLength && userNameLength < 2) {
        alert("이름은 2자 이상 10자 이내여야 합니다.");
    }

    if (!userIdLength) {
        alert("아이디를 입력해주세요!");
        return false;
    }
}

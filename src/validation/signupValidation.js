export default function validation(userEmail, userPassword) {
    const regEmail = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
    const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
    const emailLength = userEmail.length;
    const passwordLength = userPassword.length;
    const passwordMinimumLength = 8;

    if (!emailLength) {
        alert("이메일을 입력해주세요.");
        return false;
    }

    if (!regEmail.test(userEmail)) {
        alert(`${userEmail}은 올바른 이메일 형식이 아닙니다.`);
        return false;
    }

    if (passwordLength < passwordMinimumLength) {
        alert("비밀번호는 최소 8자 이상이어야 합니다.");
        return false;
    }

    if (!regPassword.test(userPassword)) {
        alert("하나 이상의 문자, 숫자가 포함되어야 합니다.");
        return false;
    }

    return true;
}

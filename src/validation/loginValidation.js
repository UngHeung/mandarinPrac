export default function validation(userEmail, userPassword) {
    const regEmail = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
    const emailLength = userEmail.length;
    const passwordLength = userPassword.length;

    if (!emailLength) {
        alert("이메일을 입력해주세요.");
        return false;
    }

    if (!passwordLength) {
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    if (userPassword)
        if (!regEmail.test(userEmail)) {
            alert(`${userEmail}은 올바른 이메일 형식이 아닙니다.`);
            return false;
        }

    return true;
}

function login() {
    const user_email = document.getElementById("login_email").value;
    const user_pwd = document.getElementById("login_password").value;
    const login = document.querySelector("#Login_Logout");

    axios.post('http://52.78.200.49:3000/login',{
        "email" : "yunx2@naver.com",
        "password" : "1234"
    })
    .then((response)=>{
        console.log(response);
        alert('로그인 되었습니다.');
        location.href="/Page/Main_Page.html";
    })
    .catch((error)=>{
        console.log(error);
        login.innerText="로그아웃";
        alert('다시 로그인 해주세요.');
        location.href="/Page/Main_Page.html";
    })
}

function register(){
    const reg_name = document.getElementById("reg_name").value;
    const reg_email = document.getElementById("reg_email").value;
    const reg_pwd = document.getElementById("reg_pwd").value;

    axios.post('http://52.78.200.49:3000/register',{
        "name" : reg_name,
        "email" : reg_email,
        "password" : reg_pwd
    })
    .then((response)=>{
        console.log(response);
        alert("회원가입이 완료되었습니다.");
        location.href="/Page/Login.html";
    })
    .catch((error)=>{
        console.log(error);
        alert('다시 회원가입 해주세요.');
    })
}
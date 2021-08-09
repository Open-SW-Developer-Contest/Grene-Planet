function login() {
    const user_email = document.getElementById("login_email").value;
    const user_pwd = document.getElementById("login_password").value;
    
    const user_info = new FormData();
    user_info.append('email', user_email);
    user_info.append('password', user_pwd);

    axios.post(url,user_info)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function register(){
    const reg_name = document.getElementById("reg_name").value;
    const reg_email = document.getElementById("reg_email").value;
    const reg_pwd = document.getElementById("reg_pwd").value;

    const user_reg_info = new FormData();
    user_reg_info.append('name', reg_name);
    user_reg_info.append('email', reg_email);
    user_reg_info.append('password', reg_pwd);

    axios.post(url,user_reg_info)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}
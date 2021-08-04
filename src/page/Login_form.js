import './Login_form.css';

function Login_form(){
        return (
        <form>
            <fieldset id="login">
                <label>아 이 디 : <input type="text" id="user_id" size="10"/></label><br/>
                <label>비밀번호 : <input type="password" id="user_pw" size="10"/></label><br/>
                <input type="submit" value="로그인"/>
            </fieldset>
        </form>
        );
}

export default Login_form;
import './Login.css';
import regist_img from '../img/register.png';
import {Link} from 'react-router-dom';

function Login(){
        return (
            <fieldset id="login_form">
                <p>Grene Planet을 더 안전하고 편리하게 이용하세요</p>
                <Link to="/login_form">
                    <button id="login_bnt">Login</button>
                </Link>
                <Link to="/register" id="register">
                    <img src={regist_img} alt="" align="left"/>
                    <p>회원가입</p>
                </Link>
            </fieldset>
        );
}

export default Login;
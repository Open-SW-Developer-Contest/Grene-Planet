import './Login_form.css';
import {Link} from 'react-router-dom';

function Login_form(){
    return (
        <div class="form-wrap">
            <form id="login" action="" class="input-group">
                <input type="text" class="input-field" placeholder="User name" required/>
                <input type="password" class="input-field" placeholder="Enter Password" required/><br/>
                <input type="checkbox" class="checkbox"/><span>Remember Password</span>
                <Link to="#">
                    <button class="submit">Login</button>
                </Link>
            </form>
        </div>
    );
}

export default Login_form;
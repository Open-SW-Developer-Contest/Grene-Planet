import './Login_form.css';
import {Link} from 'react-router-dom';

function Login_form(){
    return (
        <div className="form-wrap">
            <form id="login" action="" className="input-group">
                <input type="text" className="input-field" placeholder="User name" required/>
                <input type="password" className="input-field" placeholder="Enter Password" required/><br/>
                <input type="checkbox" className="checkbox"/><span>Remember Password</span>
                <button className="submit"><Link to="/">Login</Link></button>
            </form>
        </div>
    );
}

export default Login_form;
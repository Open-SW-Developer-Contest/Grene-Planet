import './Register.css';

function Register(){
        return (
            <div class="form-wrap">
                <form id="register" action="" class="input-group">
                    <input type="text" class="input-field" placeholder="User name" required/>
                    <input type="email" class="input-field" placeholder="Your Email" required/>
                    <input type="password" class="input-field" placeholder="Enter Password" required/><br/>
                    <input type="checkbox" class="checkbox" required/><span>Terms and conditions</span>
                    <button class="submit">REGISTER</button>
                </form>
            </div>
        );
        
}

export default Register;
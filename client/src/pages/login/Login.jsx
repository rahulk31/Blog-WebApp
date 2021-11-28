import { Link } from 'react-router-dom';
import './login.css'

function Login() {
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form className="login-form">
                <label>Email</label>
                <input type="email" name="email" id="email" className="email" placeholder="enter your email"/>
                <label>Password</label>
                <input type="password" placeholder="enter your password"/>
                <button className="btn login-login-btn">Login</button>
            </form>
            <button className="btn login-register-btn"><Link className="link" to="/register">REGISTER</Link></button>
        </div>
    )
}

export default Login

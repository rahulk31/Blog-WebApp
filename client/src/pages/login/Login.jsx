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
                <button className="btn login-btn">Login</button>
            </form>
            <button className="btn register-btn">Register</button>
        </div>
    )
}

export default Login

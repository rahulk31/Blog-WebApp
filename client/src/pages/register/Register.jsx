import './register.css'

function Register() {
    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form className="register-form">
                <label>Email</label>
                <input type="email" name="email" id="email" className="email" placeholder="enter your email"/>
                <label>Username</label>
                <input type="text" name="username" id="username" className="username" placeholder="enter your username"/>
                <label>Password</label>
                <input type="password" placeholder="enter your password"/>
                <button className="btn register-btn">Register</button>
            </form>
            <button className="btn login-btn">Login</button>
        </div>
    )
}

export default Register

import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
          const res = await axios.post('/auth/register', {
              username,
              email,
              password
          });
          res.data && window.location.replace('/login');
      } catch(err) {
          setError(true);
      }
  }
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={ handleSubmit }>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="username"
          placeholder="enter your username"
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn register-register-btn" type="submit">Register</button>
      { error && <span style={{ color: "orange"}}>Something went wrong!</span>}
      </form>
      <button className="btn register-login-btn">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}

export default Register;

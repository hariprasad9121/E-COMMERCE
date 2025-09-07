import './Login.css';

function Login() {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-heading">Login</h2>

        <label className="form-label">Email</label>
        <input type="email" placeholder="Enter your email" className="form-input" />

        <label className="form-label">Password</label>
        <input type="password" placeholder="Enter your password" className="form-input" />

        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
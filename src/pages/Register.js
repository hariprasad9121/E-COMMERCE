import './Login.css';

function Register() {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-heading">Register</h2>

        <label className="form-label">Name</label>
        <input type="text" placeholder="Enter your name" className="form-input" />

        <label className="form-label">Email</label>
        <input type="email" placeholder="Enter your email" className="form-input" />

        <label className="form-label">Password</label>
        <input type="password" placeholder="Enter your password" className="form-input" />

        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
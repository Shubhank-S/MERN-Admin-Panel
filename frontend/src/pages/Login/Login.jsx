import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form className="login_form" onSubmit={handleLogin}>
        <h1>LOGIN</h1>
        <input
          type="email"
          placeholder="Enter your Email...."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password...."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>LOGIN</button>
        <section className="login_forgotpassword">
          <NavLink>Forgot password??</NavLink>
        </section>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:8080/api/v1/user/login`,
      { email, password }
    );
    if ((!email, !password)) {
      alert(`Please Fill all the entries`);
    }
    if (response.status === 200) {
      navigate("/");
      alert(`Login Succesfull`);
    }
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

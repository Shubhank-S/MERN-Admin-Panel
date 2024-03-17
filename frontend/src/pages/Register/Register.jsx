import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputHandle from "../../hooks/useInputHandle";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [secretAnswer, setSecretAnswer] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        { name, email, password, phone, address, secretAnswer }
      );
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert(`Login Failed`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <form className="register_form" onSubmit={handleRegister}>
        <h1>REGISTER </h1>
        <input
          type="text"
          placeholder="Enter your Name...."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password...."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your Phone no...."
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Address...."
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Secret answer...."
          onChange={(e) => setSecretAnswer(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;

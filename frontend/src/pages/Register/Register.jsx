import { useState } from "react";
import "./Register.css";
import useInputHandle from "../../hooks/useInputHandle";

function Register() {
  const [
    setName,
    setEmail,
    setPassword,
    setPhone,
    setAddress,
    setSecretAnswer,
  ] = useInputHandle();
  return (
    <div className="register">
      <form className="register_form">
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

import { useState } from 'react';
import './Register.css'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [secretAnswer, setSecretAnswer] = useState("");
  return (
    <div className="register">
      <form className='register_form'>
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
  )
}

export default Register
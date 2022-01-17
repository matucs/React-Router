import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setusername] = useState('admin');
  const [password, setpassword] = useState('123');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();  
    console.log(username , password);
    if (username === "admin" && password === "123") {
        localStorage.setItem('token', 'TEST_JWT_TOKEN');
        navigate(`/Home`);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <br />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" />
      <br /><br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="password" />
      <br /><br />
      <button type="submit">Login</button>
    </form>
  );
}

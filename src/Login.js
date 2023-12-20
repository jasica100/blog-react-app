import "./login.css";
import {useState} from "react"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    console.log(emailRegex.test(email));
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      console.log("chala h ");
      setEmailError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate email before processing login logic
    validateEmail();
    // Additional login logic here
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
      <div style={{color:"red"}}>{emailError}</div>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange={(e)=>{
              setEmail(e.target.value)
        }}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">Register</button>
      </form>
    </div>
  );
}
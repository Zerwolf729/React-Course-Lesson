import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div>
        <input
          placeholder="Email"
          className="login-input"
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type={showPassword ? "password" : "text"}
          className="login-input"
        />

        <button 
          className="show-button"
          onClick={toggleShowPassword}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="login-button">Sign up</button>
    </>
  );
}

function App() {
  return (
    <>
      <p className="title">
        Hello, welcome to my website
      </p>
      <LoginForm />
    </>
  );
}

export default App

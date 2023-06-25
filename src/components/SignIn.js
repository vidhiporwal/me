import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    
    if (email && password) {
      
      if (!isValidEmail(email)) {
        setErrorMessage('Invalid email address');
        return;
      }
      
      if (!isValidPassword(password)) {
        setErrorMessage('Password should have at least one uppercase letter, numbers, and a special character');
        return;
      }
      
      onSignIn();
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button onClick={handleSignIn}>Login</button>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isLogin,setIsLogin] =useState<Boolean>(true)

  const handleToggle = () => {
    setIsLogin(prev => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="overlay">
      <div className="popup ">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input className='' type="password" id="password" placeholder="Create a password" name="password" required />
          {!isLogin && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input className="container-sm" type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
        )}
         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          
        </form>
        <a onClick={handleToggle} className="toggleButton cursor">
        {isLogin ? `Need an account?  Sign Up ` : 'Already have an account? Login'}
        </a>
        <button className="closeBtn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginPopup;

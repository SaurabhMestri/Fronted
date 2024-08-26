import { useState } from 'react';
import styles from '../styles/LoginPopup.module.css'; // Import CSS module for styling

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
        <button className={styles.closeBtn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup;

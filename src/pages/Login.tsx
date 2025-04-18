import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Auth.module.css";

import ALS from "../assets/ALS-logo.png";
import Close from "../assets/close.png";

const Login = () => {
  const [isForgot, setIsForgot] = useState(false);
  const handleForgotClick = () => {
    setIsForgot(!isForgot);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.Login}>
        <div className={styles.Top}>
          <img src={ALS} alt="Main logo" />
          <span className={styles.Create}>Daily Time Record</span>
        </div>
        <form action="">
          <div className={styles.Form_inner}>
            <label htmlFor="">Email:</label>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className={styles.Form_inner}>
            <label htmlFor="">Password:</label>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className={styles.Remember}>
            <div className={styles.Remember_inner}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>

            <Link className={styles.Forgott} to="/" onClick={handleForgotClick}>
              Forgot Password?
            </Link>
          </div>

          <div className={styles.Form_button}>
            <button>Log in</button>
            <button>Log In with Google</button>
          </div>

          <span className={styles.Already}>
            Don't have an account?
            <Link className={styles.Dont} to="/Signup">
              Sign up
            </Link>
          </span>
        </form>
      </div>

      {isForgot && (
        <div className={styles.Forgot}>
          <div className={styles.Forgot_inner}>
            <div className={styles.Forgot_head}>
              <span>Forgot password</span>
              <img onClick={handleForgotClick} src={Close} alt="Close button" />
            </div>
            <input type="email" placeholder="Enter your email" />
            <button>Send password reset email</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

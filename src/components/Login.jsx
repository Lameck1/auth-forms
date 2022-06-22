import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <Link to='/reset-password'>Forgot Password?</Link>
      <div>
        <span>Don't have an account yet?</span>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Login;

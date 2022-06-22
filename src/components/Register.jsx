import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <div>
        <span>Have an account yet?</span>
        <Link to='/'>Login</Link>
      </div>
    </div>
  );
};

export default Register;

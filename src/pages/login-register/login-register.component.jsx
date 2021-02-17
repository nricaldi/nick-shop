import React from 'react';

import Login from '../../components/login/login.component';

import './login-register.styles.scss';

const LoginAndRegister = () => (
  <div className="login-register">
    <div className="container">
      <h1>Login page</h1>
      <Login></Login>
    </div>
  </div>
)

export default LoginAndRegister;
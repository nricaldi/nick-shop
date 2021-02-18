import React from 'react';

import Login from '../../components/login/login.component';

import './login-register.styles.scss';

const LoginAndRegister = () => (
  <div className="login-register">
    {/* <div className="container"> */}
      <div className="form-container">
      <Login></Login>
      {/* <Login></Login> */}

      </div>
    {/* </div> */}
  </div>
)

export default LoginAndRegister;
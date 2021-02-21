// import { render } from '@testing-library/react';
import React, { useState, useHistory } from 'react';

import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-register.styles.scss';

const LoginAndRegister = () => {
  const [ isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-register">
        <div className="form-container">
        {
          isLogin ?
            <Login></Login> 
          : 
            <SignUp></SignUp>
        }

        {
          isLogin ?
          <p>I'm not cool yet... <span className="register-link" onClick={()=>setIsLogin(!isLogin)}>Register</span></p>
          :
          <p>I already have an account... <span className="register-link" onClick={()=>setIsLogin(!isLogin)}>Sign In</span></p>
        }
        </div>
    </div>
  )
}


export default LoginAndRegister;
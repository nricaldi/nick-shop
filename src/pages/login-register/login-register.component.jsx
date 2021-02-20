// import { render } from '@testing-library/react';
import React, { useState } from 'react';

import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import Fade from 'react-reveal';

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
            <p>I dont have an account... <a className="register-link" onClick={()=>setIsLogin(!isLogin)}>Register</a></p>
          :
            <p>I already have an account... <a className="register-link" onClick={()=>setIsLogin(!isLogin)}>Sign In</a></p>
        }
        </div>
    </div>
  )
}


export default LoginAndRegister;
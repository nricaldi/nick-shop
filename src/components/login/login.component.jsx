import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import Fade from 'react-reveal/Fade';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <div className="login">
          <Fade>
            <div className="login-copy">
              <h2>Welcome Back! We missed you.</h2>
              <span>Sign in using your email and password</span>
            </div>
          </Fade>

          <form onSubmit={this.handleSubmit}>
            <Fade top cascade>
              <div>
              <div>
                <FormInput 
                  type="email" 
                  name="email"
                  label="Email"
                  handleChange={this.handleChange}
                  value={this.state.email} required
                />
              </div>

              <div>
                <FormInput 
                  type="password" 
                  name="password" 
                  label="Password"
                  handleChange={this.handleChange}
                  value={this.state.password} 
                  required
                />
              </div>

                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
              </div>
            </Fade>


          </form>
        </div>
      </>
    )
  }
}

export default Login;
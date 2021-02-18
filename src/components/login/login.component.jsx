import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
          <div className="login-copy">
            <h2>Sign in and start adding to your wardrobe.</h2>
            <span>Sign in with your email and password</span>
          </div>

          <form onSubmit={this.handleSubmit}>
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

          </form>

          <p>I dont have an account... <Link className="register-link" to="/register">Register</Link></p>
        </div>
      </>
    )
  }
}

export default Login;
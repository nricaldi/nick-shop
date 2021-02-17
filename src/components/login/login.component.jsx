import React from 'react';

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
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>

            <div>
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                name="email" 
                onChange={this.handleChange}
                value={this.state.email} required
              />
            </div>
            
            <div>
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                name="password" 
                onChange={this.handleChange}
                value={this.state.password} 
                required
              />
            </div>

            <input type="submit" value="Sign in"/>

          </form>
        </div>
      </>
    )
  }
}

export default Login;
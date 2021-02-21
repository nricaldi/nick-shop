import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import Fade from 'react-reveal/Fade';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
        alert('passwords do not match');
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName });
        this.setState({displayName: '', email: '', password: '', confirmPassword: ''});        
    }
    catch (error) {
        console.log(error);
    }

  }

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
       <div className="login" style={{overflow: 'hidden'}}>
        
        <Fade>
          <div className="login-copy">
            <h2>Great to see a new face!</h2>
            <span>Let us get to know you a little bit.</span>
          </div>
        </Fade>

          <form onSubmit={this.handleSubmit}>
            <Fade top cascade> 
                <div>
                    <div>
                    <FormInput 
                        type="text" 
                        name="displayName"
                        label="Display Name"
                        handleChange={this.handleChange}
                        value={this.state.displayName} required
                    />
                    </div>

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

                    <div>
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword} 
                        required
                    />
                    </div>

                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
                {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton> */}
            </Fade>
          </form>

          {/* <p>I dont have an account... <Link className="register-link" to="/register">Register</Link></p> */}
        </div>
      </>
    )
  }

}

export default SignUp;
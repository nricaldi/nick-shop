import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginAndRegister from './pages/login-register/login-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
 
  unsusbscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      } 
      else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsusbscribeFromAuth();
  }

  render() {
    return (
      <>
        {/* No need to pass currentUser through props bc of redux connect  */}
        {/* See Header component */}
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route 
            exact 
            path='/login' 
            render={() => 
              this.props.currentUser ? 
                (<Redirect to='/'/>) 
              : 
                (<LoginAndRegister />)
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
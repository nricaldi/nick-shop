import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../images/rcld-filled.svg';
import './header.styles.scss';


const Header = ({ currentUser, hidden }) => {

  const [active, setActive] = useState(false);
  const [isPhone, setisPhone] = useState(true);
  const body = document.getElementsByTagName("BODY")[0];
 
  const toggleActive = () => {
    setActive(!active);

    const w = window.innerWidth;
    if (w <= 768) {
      !active ? body.style.overflow = "hidden" : body.style.overflow = "auto";

    }
  }

  return(
  <>
    <header className="header">
      <div className="container">
        <div className="content">
          <Link 
            to="/" 
            className="logo"
            onClick={() => setActive(false)}
          >
            <Logo />
          </Link>

          {/* <CartIcon /> */}
          <div 
            className={`burger ${active ? "active-burger" : ""}`}
            onClick={toggleActive}
          >
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>

          <div className={`options ${active ? "active-nav" : ""}`}>
            <Link 
              className="option" 
              to="/" 
              onClick={toggleActive}
            >
              Home
            </Link>

            <Link 
              className="option" 
              to="/shop"
              onClick={toggleActive}
            >
              Shop
            </Link>

            <Link 
              className="option" 
              to="/contact"
              onClick={toggleActive}
            >
              Contact
            </Link>

            {
              currentUser ? 
              <div 
                className="option" 
                onClick={() => {
                  auth.signOut();
                  toggleActive()
                }}
              >
                Sign Out
              </div> 
              :
              <Link 
                className="option" 
                to="/login"
                onClick={toggleActive}
              >
                Sign in
              </Link>

            }

            <CartIcon />

            {/* <Link 
                className="option" 
                to="/checkout"
                onClick={toggleActive}
              >
                Cart
              </Link> */}

          </div>
          {
            hidden ? null : <CartDropdown />
          }
        </div>
      </div>
    </header>

    {/* <section className="hero">
      <div className="container">
          <h1>High Fashion On A Low Budget.</h1>
      </div>
    </section> */}
  </>
  )
}

// Use this to GET data from the store (root reducer state object)
// The state object we get is the root reducer
// Literally maps state to props 

// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);
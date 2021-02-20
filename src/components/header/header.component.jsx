import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {

  const [active, setActive] = useState(false);
  const body = document.getElementsByTagName("BODY")[0];

  const toggleActive = () => {
    setActive(!active);
    !active ? body.style.overflow = "hidden" : body.style.overflow = "auto"
  }

  return(
  <>
    <header className="header">
      <div className="container">
        <div className="content">
          <Link 
            to="/" 
            className="logo"
            // onClick={toggleActive}
            onClick={() => setActive(false)}
          >
            <h1>RCLD</h1>
          </Link>

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
              // onClick={() => setActive(false)}
            >
              Home
            </Link>

            <Link 
              className="option" 
              to="/shop"
              onClick={toggleActive}
              // onClick={() => setActive(false)}
            >
              Shop
            </Link>

            <Link 
              className="option" 
              to="/contact"
              onClick={toggleActive}
              // onClick={() => setActive(false)}  
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
              // onClick={() => setActive(false)}
              >
                Sign in
              </Link>

            }

          </div>
        </div>
      </div>
    </header>

    <section className="hero">
      <div className="container">
          <h1>High Fashion On A Low Budget</h1>
      </div>
    </section>
  </>
  )
}

export default Header;
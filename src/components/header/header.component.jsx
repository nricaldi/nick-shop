import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {

  const [active, setActive] = useState(false);

  const burgerStyle = {
    
  }

  return(
  <>
    <header className="header">
      <div className="container">
        <div className="content">
          <Link to="/" className="logo">
            <h1>RCLD</h1>
          </Link>

          <div 
            className="burger"
            onClick={() => {
                setActive(!active);
                console.log(active)
              }
            }
            style={burgerStyle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* <div className="options "> */}
          <div className={`options ${active ? "active-nav" : ""}`}>
            <Link 
              className="option" 
              to="/" 
              onClick={() => setActive(false)}
            >
              Home
            </Link>

            <Link 
              className="option" 
              to="/shop"
              onClick={() => setActive(false)}
            >
              Shop
            </Link>

            <Link 
              className="option" 
              to="/contact"
              onClick={() => setActive(false)}  
            >
              Contact
            </Link>

            <Link 
              className="option" 
              to="/login"
              onClick={() => setActive(false)}
            >
              Sign in
            </Link>
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
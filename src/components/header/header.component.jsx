import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <>
    <header className="header">
      <div className="container">
        <div className="content">
          <Link to="/" className="logo">
            <h1>RCLD</h1>
          </Link>

          <div className="options">
            <Link className="option" to="/shop">
              Shop
            </Link>
            <Link className="option" to="/contact">
              Contact
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

export default Header;
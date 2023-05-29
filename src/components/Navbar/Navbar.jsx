import React from 'react'
import arrowBack from '../../assets/icons/flecha-navegar.svg';
import campaign from '../../assets/icons/campana.svg';
import './Navbar.scss';
const Navbar = () => {
    return (
      <>
        <nav>
          <div className="navbar-container">
            <div className="navbar-left">
              <i className="fas fa-bars">
                <img srcSet={arrowBack} />
              </i>
            </div>
            <div className="navbar-center">
              <span>Cargo Orders</span>
            </div>
            <div className="navbar-right">
              <i className="fas fa-search">
                <img srcSet={campaign} />
              </i>
            </div>
          </div>
        </nav>
      </>
    );
  };

export default Navbar
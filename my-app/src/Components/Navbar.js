import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <div className='navCon'>
        <Link to="/"><h1>MetaData</h1></Link>
        <nav>
        {isLoggedIn ? (
          <div>
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : (
            <div>
              <Link className="navPageLink" to="/Login">Login</Link>
              <Link className="navPageLink" to="/Signup">Sign Up</Link>
            </div>
            )}
        </nav>
      </div>
    </header>


  );
};

export default Navbar;
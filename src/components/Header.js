import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Header.css';  // Import your custom CSS

function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  if (isLoading) {
    return <header className="header">Loading...</header>;
  }

  return (
    <header className="header">
      <div className="logo">
        {/* Insert the logo image next to the title */}
       {/* <img src={process.env.PUBLIC_URL + '/Outfitter (1).png'} alt="Logo" className="header-logo" />*/}
        <h1 className="title">Outfitter</h1>
      </div>
      <div className="header-right">
        <a href="/virtual-try-on" className="nav-link">Home</a>
        <a href="/contact-us" className="nav-link">About Us</a> 
        <a href="/contact-us" className="nav-link">Contact Us</a> 
      </div>
      {isAuthenticated ? (
        <div className="profile-info">
          <div className="profile-picture-container">
            <img src={user.picture} alt={user.name} className="profile-picture" />
            <div className="user-details">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <button 
            className="login-btn logout-btn" 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Log Out
          </button>
        </div>
      ) : (
        <button 
          className="login-btn" 
          onClick={() => loginWithRedirect()}
        >
          Sign Up / Log In
        </button>
      )}
    </header>
  );
}

export default Header;

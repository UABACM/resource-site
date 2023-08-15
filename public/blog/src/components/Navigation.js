import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="hamburger-menu">
        <button className="burger" onClick={toggleMenu} data-state={menuOpen ? 'open' : 'closed'}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav data-state={menuOpen ? 'open' : 'closed'}>
        <ul>
          <li><Link to="/">Main</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
        </ul>
        <p className="center" style={{ fontWeight: 800, fontSize: "1.7em" }}>ACM</p>
        <ul className="socialLinks">
          <a href="https://uabacm.org">Website</a>
          <a href="https://www.instagram.com/uabacm/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </ul>
        <p className="center" style={{ fontWeight: 800, fontSize: "1.7em" }}>WIT</p>
        <ul className="socialLinks">
          <a href="https://sites.google.com/view/wituab/">Website</a>
          <a href="https://www.instagram.com/uab_womenintech/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </ul>
      </nav>
      <div className="mobileNavigation"></div>
    </div>
  );
};

export default Navigation;

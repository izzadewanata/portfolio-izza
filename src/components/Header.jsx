import React from 'react';

export default function Header() {
  const handleLinkClick = () => {
    document.body.classList.remove('nav-open');
  };

  const toggleNav = () => {
    document.body.classList.toggle('nav-open');
  };

  return (
    <header>
      {/* <div className="logo">
        <img src="#" alt="Logo" />
      </div> */}
      <button
        className="nav-toggle"
        aria-label="navigation toggle"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={handleLinkClick}>
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about-me" className="nav__link" onClick={handleLinkClick}>
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={handleLinkClick}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

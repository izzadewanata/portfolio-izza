import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="logo">
            <img src="#" alt="Logo" />
        </div>
        <button className="nav-toggle" aria-label="navigation toggle">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" class="nav__link">Home</a></li>
                <li className="nav__item"><a href="#services" class="nav__link">My Services</a></li>
                <li className="nav__item"><a href="#about" class="nav__link">About me</a></li>
                <li className="nav__item"><a href="#work" class="nav__link">My Work</a></li>
            </ul>
        </nav>

    </header>
  )
}

import React, { useState } from 'react';

// ---------- Header Component ----------
function Header() {
  const handleLinkClick = () => {
    document.body.classList.remove('nav-open');
  };

  const toggleNav = () => {
    document.body.classList.toggle('nav-open');
  };

  return (
    <header>
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
            <a href="#home" className="nav__link" onClick={handleLinkClick}>Home</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={handleLinkClick}>My Services</a>
          </li>
          <li className="nav__item">
            <a href="#about-me" className="nav__link" onClick={handleLinkClick}>About me</a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={handleLinkClick}>My Work</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// ---------- Introduction Component ----------
function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Izza Sinatrya</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Software / QA Engineer
      </p>
      <img src="public\profile-izza.jpg" alt="Izza Sinatrya" className="intro__img" />
    </section>
  );
}

// ---------- Services Component ----------
function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Test Planning & Strategy Development</h3>
          <p>
            Define comprehensive test plans and strategies from technical specifications. Analyze risks, design detailed test cases, and establish clear acceptance criteria to capture defects early.
          </p>
        </div>
        <div className="service">
          <h3>Hybrid Test Execution & Defect Tracking</h3>
          <p>
            Validate software quality using a mix of manual exploratory testing and automated suites. I execute functional, regression, and integration tests, documenting actionable bugs in Jira for fast resolution.
          </p>
        </div>
        <div className="service">
          <h3>Automation Framework Engineering</h3>
          <p>
            Design and maintain scalable test automation frameworks. I write clean, efficient script code, optimize test suites for reliability, and integrate testing into CI/CD pipelines.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">My Work</a>
    </section>
  );
}

// ---------- About Component ----------
function About() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Software & Quality Assurance Analyst
      </p>
      <div className="about-me__body">
        <p>
          A results-driven QA Engineer with 4+ years of experience in IT consulting, specializing in large-scale testing programs and digital transformation initiatives. Adept across the entire SDLC, with hands-on expertise in end-to-end, integration, and product verification testing, as well as robust defect management. 
        </p>
        <p>
          Proven capability in leading and mentoring small testing teams (3–6 members) to ensure high-quality delivery. Strong programming foundation in Java, Python, and JavaScript/TypeScript, driving efficient test automation and scripting.
        </p>
      </div>
      <img src="public\Casual-izza.jpg" alt="Izza working" className="about-me__img" />
    </section>
  );
}

// ---------- Work Component ----------
function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        <a href="https://izzadewanata.github.io/microGPT/" className="portfolio__item" target="_blank" rel="noopener noreferrer">
          <img src="public\Project-1.png" alt="microGPT project screenshot" className="portfolio__img" />
        </a>
        <a href="https://izzadewanata.github.io/myrecipe/" className="portfolio__item" target="_blank" rel="noopener noreferrer">
          <img src="public\Project-2.png" alt="MyRecipe app screenshot" className="portfolio__img" />
        </a>
        <a href="https://izzadewanata.github.io/rock-paper-scissors/" className="portfolio__item" target="_blank" rel="noopener noreferrer">
          <img src="public\Project-3.png" alt="Rock Paper Scissors game screenshot" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

// ---------- Footer Component ----------
function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:izza.career@gmail.com" className="footer__link">
        izza.career@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/izzadewanata" className="social-list__link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/izzasinatrya/" className="social-list__link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="mailto:izza.career@gmail.com" className="social-list__link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-google"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

// ---------- Main App ----------
function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default App;
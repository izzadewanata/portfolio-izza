import React from 'react'

export default function Footer() {
  return (
    <footer class="footer">
        <a href="mailto: izza.career@gmail.com" className="footer__link">izza.career@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
              <a href="https://github.com/izzadewanata" className="social-list__link" target="_blank"><i class="fa-brands fa-github"></i></a>
            </li>
            <li className="social-list__item">
              <a href="https://www.linkedin.com/in/izzasinatrya/" className="social-list__link" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li className="social-list__item">
              <a href="mailto: izza.career@gmail.com" className="social-list__link" target="_blank"><i class="fa-brands fa-google"></i></a>
            </li>
            
        </ul>
    </footer>
  )
}

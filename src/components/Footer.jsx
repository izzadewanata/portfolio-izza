import React from 'react'

export default function Footer() {
  return (
    <footer class="footer">
        <a href="#" className="footer__link">Email here...</a>
        <ul className="social-list">
            <li className="social-list__item">
              <a href="#" className="social-list__link"><i class="fa-brands fa-github"></i></a>
            </li>
            <li className="social-list__item">
              <a href="#" className="social-list__link"><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li className="social-list__item">
              <a href="#" className="social-list__link"><i class="fa-brands fa-google"></i></a>
            </li>
            
        </ul>
    </footer>
  )
}

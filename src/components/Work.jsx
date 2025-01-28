import React from 'react'

export default function Work() {
  return (
    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">
            My work
        </h2>
        <p className="section__subtitle section__subtitle--work">
            A selection of my range of work
        </p>

        <div className="portfolio">
            <a href="https://izzadewanata.github.io/microGPT/" className="portfolio__item" target="_blank">
                <img src="Project-1.png" alt="Digital Clock" className="portfolio__img" />
            </a>

            <a href="https://izzadewanata.github.io/myrecipe/" className="portfolio__item" target="_blank">
                <img src="Project-2.png" alt="Loading Page" className="portfolio__img" />
            </a>

            <a href="https://izzadewanata.github.io/rock-paper-scissors/" className="portfolio__item" target="_blank">
                <img src="Project-3.png" alt="To Do List" className="portfolio__img" />
            </a>
            
        </div>
    </section>
  )
}

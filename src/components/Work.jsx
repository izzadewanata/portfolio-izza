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
            <a href="#" className="portfolio__item">
                <img src="example.jpg" alt="example" className="portfolio__img" />
            </a>

            <a href="#" className="portfolio__item">
                <img src="example.jpg" alt="example" className="portfolio__img" />
            </a>

            <a href="#" className="portfolio__item">
                <img src="example.jpg" alt="example" className="portfolio__img" />
            </a>

            <a href="#" className="portfolio__item">
                <img src="example.jpg" alt="example" className="portfolio__img" />
            </a>

            <a href="#" className="portfolio__item">
                <img src="example.jpg" alt="example" className="portfolio__img" />
            </a>

            <a href="#" className="portfolio__item">
                <img src="example.jpg" alt="example" className="portfolio__img" />
            </a>
            
        </div>
    </section>
  )
}

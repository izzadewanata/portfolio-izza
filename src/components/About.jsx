import React from 'react'

export default function About() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="section__title section__title--about">
            Who I am
        </h2>
        <p className="section__subtitle section__subtitle--about">
          Front-End Developer based out of SYD
        </p>

        <div className="about-me__body">
            <p>Innovative and detail-oriented Front-End Developer with a strong foundation in both web development and software testing. Leveraging my background as a Test Analyst, I bring a unique perspective to front-end development, combining a keen eye for detail with a deep understanding of quality assurance processes</p>
            
            <p>Proficient in building responsive, user-centered interfaces with HTML, CSS, JavaScript, and frameworks such as React and Vue.js, I am committed to delivering polished, efficient, and bug-free applications. Known for my problem-solving abilities and collaborative approach, I thrive in environments where I can ensure both technical precision and an excellent user experience.</p>
        </div>

        <img src="picture-izza.jpg" alt="Profile picture #2" className="about-me__img" />
    </section>
  )
}

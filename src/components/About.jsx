import React from 'react'

export default function About() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="section__title section__title--about">
            Who I am
        </h2>
        <p className="section__subtitle section__subtitle--about">
          Software & Quality Assurance Analyst
        </p>

        <div className="about-me__body">
            <p> with 3+ years of experience in software testing within an IT consulting environment. Specialized in implementing large-scale testing programs and supporting digital transformation initiatives. Proficient in SDLC, with hands-on expertise in end-to-end, integration, and product verification testing, as well as defect reporting and risk mitigation. </p>
            
            <p>Experienced in leading and supervising small testing teams (3-6 members) to ensure high-quality software delivery. Strong programming knowledge in Java, Python, and JavaScript/TypeScript, enabling efficient test automation and scripting. Seeking an opportunity to leverage my expertise in a dynamic environment to drive quality assurance excellence and process optimization.</p>
        </div>

        <img src="Casual-izza.jpg" alt="Profile picture #2" className="about-me__img" />
    </section>
  )
}

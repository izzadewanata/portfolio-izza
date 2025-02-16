import React from 'react'

export default function Services() {
  return (
    <section className="my-services" id="services">
        <h2 className="section__title section__title--services">
            What I do
        </h2>
        <div className="services">
            <div className="service">
                <h3>Test Planning and Strategy Development</h3>
                <p>Defines comprehensive test plans and strategies that align with project requirements, ensuring structured and efficient testing. Analyzes specifications, identifies risks, and selects the right methodologies to create detailed test cases and acceptance criteria, minimizing defects.</p>
            </div>

            <div className="service">
                <h3>Test Execution and Defect Reporting</h3>
                <p>Executes functional, regression, integration, and performance tests to validate software quality using both manual and automated approaches. Identifies and documents defects in tools like JIRA, providing detailed insights to developers for quick resolution.</p>
            </div>

            <div className="service">
                <h3>Software Development & Problem-Solving</h3>
                <p>Design, develop, and maintain software applications using industry best practices. Write clean, efficient, and scalable code while ensuring high performance and reliability. Analyze complex problems and implement optimized solutions. Debug, test, and refactor code to enhance efficiency and maintainability.</p>
            </div>
        </div>

        <a href="#work" className="btn">My Work</a>
    </section>
  )
}

import React from 'react'

export default function Services() {
  return (
    <section className="my-services" id="services">
        <h2 className="section__title section__title--services">
            What I do
        </h2>
        <div className="services">
            <div className="service">
                <h3>Design + Development</h3>
                <p>Create visually engaging, responsive web pages using HTML, CSS, and JavaScript, ensuring a seamless user experience across devices. Ensure that layouts are responsive and adaptive across devices, including desktops, tablets, and mobile phones.</p>
            </div>

            <div className="service">
                <h3>APIs and Asynchronous Data Loading</h3>
                <p>Connect with backend APIs to retrieve and display data asynchronously without reloading the page. Enhancing interactivity and dynamic content with modern frameworks such as React App</p>
            </div>

            <div className="service">
                <h3>Debugging and Testing</h3>
                <p>Conduct thorough testing of user interfaces to ensure smooth and intuitive user experiences, collaborating closely with developers to identify and resolve UI bugs. Verify the functionality and usability of front-end features across multiple browsers and devices, analyzing design elements to maintain consistency and responsiveness. </p>
            </div>
        </div>

        <a href="#work" className="btn">My Work</a>
    </section>
  )
}

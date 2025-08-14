import React from 'react';

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "Jobsforce.Ai",
    duration: "Jan 2025 – Present",
    details: [
      "Engineered scalable job scraping pipelines for LinkedIn, RemoteOK, ZipRecruiter, and Ashby using Playwright and Selenium.",
      "Created a Glassdoor review scraper for company insights and sentiment analysis.",
      "Developed an automated job application system using Playwright and Llama.cpp.",
      "Designed FastAPI endpoints for bulk job applications with async processing and retry mechanisms."
    ]
  },
  {
    role: "Software Engineer",
    company: "Capgemini",
    duration: "Jan 2021 – Mar 2023",
    details: [
      "Developed scalable applications using Python, Java, and JavaScript.",
      "Designed microservices using Flask and Python to improve data retrieval and reduce latency.",
      "Deployed containerized apps using Docker and Kubernetes on AWS.",
      "Performed rigorous code reviews with TDD and BDD practices."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Capgemini",
    duration: "Jun 2020 – Dec 2020",
    details: [
      "Developed RESTful APIs and internal tools to streamline communication between systems.",
      "Built reusable components in Python and JUnit for a solutions framework.",
      "Automated CI/CD pipelines with Jenkins, Git, and Docker."
    ]
  }
];

function Experience() {
  return (
    <section style={{ padding: '50px', background: '#f5f5f5', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{
  marginBottom: '30px',
  padding: '20px',
  borderRadius: '10px',
  background: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
}}>

          <h3>{exp.role} - {exp.company}</h3>
          <p><em>{exp.duration}</em></p>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;

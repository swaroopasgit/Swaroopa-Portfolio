import React from 'react';

const projects = [
  {
    title: "Retail Sales Data Integration Platform",
    tech: "Python, SQL, React",
    description: "Consolidates multi-source sales data and visualizes trends to improve supply planning.",
    link: "https://github.com/saiswaroopa/retail-sales-platform"
  },
  {
    title: "Automated Job Application System",
    tech: "Python, Playwright, FastAPI",
    description: "Automatically submits job applications with AI-generated responses across multiple job portals.",
    link: "https://github.com/saiswaroopa/job-automation-system"
  },
  {
    title: "Glassdoor Review Scraper",
    tech: "Python, Selenium",
    description: "Extracts company reviews and performs sentiment analysis to improve job recommendations.",
    link: "https://github.com/saiswaroopa/glassdoor-scraper"
  }
];

function Projects() {
  return (
    <section style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{
  marginBottom: '30px',
  padding: '20px',
  borderRadius: '10px',
  background: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
}}>

          <h3>{project.title}</h3>
          <p><strong>Tech Used:</strong> {project.tech}</p>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;

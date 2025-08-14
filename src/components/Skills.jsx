import React from 'react';

const skills = ["Python", "Java", "JavaScript", "SQL", "React", "Node.js", "Flask", "Django", "Spring Boot", "AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Selenium", "PyTest"];

function Skills() {
  return (
    <section style={{ padding: '50px', background: '#f5f5f5', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Core Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
<span key={index} style={{
  margin: '8px',
  padding: '6px 15px',
  borderRadius: '20px',
  backgroundColor: '#0073b1',
  color: '#fff',
  fontWeight: '500'
}}>
  {skill}
</span>

        ))}
      </div>
    </section>
  );
}

export default Skills;


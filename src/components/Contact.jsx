import React from 'react';

function Contact() {
  return (
    <section style={{ padding: '50px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, feel free to reach out via email or connect on LinkedIn/GitHub.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="mailto:saiswaroopavakkalanka@gmail.com" style={{ margin: '0 15px' }}>Email</a>
        <a href="https://www.linkedin.com/in/sai-swaroopa-vakkalanka/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>LinkedIn</a>
        <a href="https://github.com/saiswaroopa" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>GitHub</a>
        {/* Optional: Add resume download */}
        {/* <a href="/resume.pdf" download style={{ margin: '0 15px' }}>Resume</a> */}
      </div>
    </section>
  );
}

export default Contact;

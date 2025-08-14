import React from 'react';

function Header() {
  return (
    <header style={{
      textAlign: 'center',
      padding: '80px 20px',
      background: '#0073b1',
      color: '#fff'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Sai Swaroopa Vakkalanka</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Full Stack & Cloud Engineer</p>
      <p style={{ marginBottom: '30px' }}>Building scalable, cloud-native applications & automated solutions</p>
      <div>
        <a href="mailto:saiswaroopavakkalanka@gmail.com" style={{ margin: '0 15px', color: '#fff' }}>Email</a>
        <a href="https://www.linkedin.com/in/sai-swaroopa-vakkalanka/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#fff' }}>LinkedIn</a>
        <a href="https://github.com/saiswaroopa" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#fff' }}>GitHub</a>
      </div>
    </header>
  );
}

export default Header;

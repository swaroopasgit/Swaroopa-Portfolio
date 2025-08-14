import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '50px 60px',
      background: '#0073b1',
      color: '#fff',
      flexWrap: 'wrap'
    }}>
      {/* Centered name, role, and links */}
      <div style={{
        textAlign: 'center',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Sai Swaroopa Vakkalanka</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Full Stack & Cloud Engineer</p>
        <div>
          <a href="mailto:saiswaroopavakkalanka@gmail.com" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Email</a>
          <a href="https://www.linkedin.com/in/sai-swaroopa-vakkalanka/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>LinkedIn</a>
          <a href="https://github.com/saiswaroopa" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>GitHub</a>
        </div>
      </div>

      {/* Top-right QR code with label */}
      <div style={{
        textAlign: 'center',
        marginLeft: '20px'
      }}>
        <QRCodeSVG
          value="https://swaroopasgit.github.io/Swaroopa-Portfolio"
          size={100}
          bgColor="#0073b1"
          fgColor="#ffffff"
        />
        <p style={{ fontSize: '0.85rem', color: '#fff', marginTop: '8px', fontWeight: '500' }}>Scan to view my portfolio</p>
      </div>

      {/* Responsive styling */}
      <style>
        {`
          @media (max-width: 768px) {
            header {
              flex-direction: column;
              align-items: center;
            }
            div[style*="margin-left: 20px"] {
              margin-left: 0;
              margin-top: 20px;
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;

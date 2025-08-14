import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // latest version uses named exports

function QRCodeSection() {
  return (
    <section style={{
      textAlign: 'center',
      padding: '50px',
      background: '#f5f5f5',
      borderRadius: '15px',
      margin: '50px auto',
      maxWidth: '300px'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#222' }}>Scan to view my portfolio</h3>
      <QRCodeSVG
        value="https://swaroopasgit.github.io/swaroopa-portfolio"
        size={220}
        bgColor="#ffffff"
        fgColor="#0073b1"
      />
    </section>
  );
}

export default QRCodeSection;

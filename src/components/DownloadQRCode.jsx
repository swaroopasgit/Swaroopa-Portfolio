import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

function DownloadQRCode() {
  const qrRef = useRef();

  const handleDownload = () => {
    // Get the canvas element
    const canvas = qrRef.current.querySelector("canvas");
    if (!canvas) return;

    // Convert canvas to PNG URL
    const pngUrl = canvas.toDataURL("image/png");

    // Create a temporary <a> to trigger download
    const a = document.createElement("a");
    a.href = pngUrl;
    a.download = "portfolio-qr.png";
    a.click();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }} ref={qrRef}>
      <QRCodeCanvas
        value="https://swaroopasgit.github.io/Swaroopa-Portfolio"
        size={200}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleDownload}>Download QR Code (PNG)</button>
      </div>
    </div>
  );
}

export default DownloadQRCode;

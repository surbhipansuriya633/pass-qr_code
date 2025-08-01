import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRPage() {
    const qrData = window.location.origin + "/season-pass-access";

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h2>Scan QR to Access Season Pass</h2>
            <QRCodeCanvas value={qrData} size={200} />
            <p>Scan with your phone to access</p>
        </div>
    );
}

export default QRPage;

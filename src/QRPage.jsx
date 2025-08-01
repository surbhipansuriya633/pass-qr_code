import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRPage() {
    const qrUrl = "https://pass-qr-code.vercel.app/season-pass-access";

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h2>Scan QR to Access Season Pass</h2>
            <QRCodeCanvas value={qrUrl} size={200} />
            <p>Scan with your phone</p>
        </div>
    );
}

export default QRPage;

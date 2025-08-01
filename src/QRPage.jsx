import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function QRPage() {
    const qrRef = useRef();
    const qrUrl = "https://pass-qr-code.vercel.app/season-pass-access";

    const downloadPDF = async () => {
        // Create a canvas of QR with text above
        const canvas = await html2canvas(qrRef.current, { scale: 4 });
        const imgData = canvas.toDataURL("image/png");

        // PDF config
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgProps = pdf.getImageProperties(imgData);
        const imgWidth = 100; // You can change QR size in PDF here
        const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        // Add heading text centered above the QR
        pdf.setFontSize(16);
        pdf.text("Scan this QR code to get Season Pass", pageWidth / 2, y - 10, { align: "center" });

        // Add image (QR)
        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

        pdf.save("season-pass-qr.pdf");
    };

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h2>Scan QR to Access Season Pass</h2>
            <div ref={qrRef} style={{ display: "inline-block", padding: 20, background: "#fff" }}>
                <QRCodeCanvas value={qrUrl} size={200} />
            </div>
            <p>Scan with your phone</p>
            <button onClick={downloadPDF} style={{ marginTop: 20 }}>
                Download QR as PDF
            </button>
        </div>
    );
}

export default QRPage;

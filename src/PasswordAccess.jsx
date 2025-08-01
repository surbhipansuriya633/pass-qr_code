import React, { useState } from "react";
import Swal from "sweetalert2";

function PasswordAccess() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const correctPassword = "pass2025";

    const seasonPassImage = "data:image/jpeg;base64,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"; // replace with real image URL

    const handleSubmit = () => {
        if (password === correctPassword) {
            Swal.fire({
                icon: 'success',
                title: 'Access Granted 🎉',
                text: 'You have successfully unlocked the Season Pass!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then(() => {
                setIsAuthenticated(true);
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect Password ❌',
                text: 'Please try again!',
            });
        }
    };

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            {!isAuthenticated ? (
                <>
                    <h3>🔒 Enter Password to View Season Pass</h3>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={handleSubmit} style={{ marginTop: 10 }}>
                        Submit
                    </button>
                </>
            ) : (
                <>
                    <h3>✅ Access Granted</h3>
                    <img
                        src={seasonPassImage}
                        alt="Season Pass"
                        style={{ maxWidth: "100%", marginTop: 20 }}
                    />
                </>
            )}
        </div>
    );
}

export default PasswordAccess;

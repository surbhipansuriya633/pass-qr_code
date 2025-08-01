import React, { useState } from "react";

function PasswordAccess() {
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const correctPassword = "pass2025";
    const seasonPassImage = "https://your-image-url.com/season-pass.jpg";

    const handleSubmit = () => {
        if (password === correctPassword) {
            setAuthenticated(true);
        } else {
            alert("Incorrect password!");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            {!authenticated ? (
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

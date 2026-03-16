import React, { useState } from "react";
import Swal from "sweetalert2";

function PasswordAccess() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const correctPassword = "2026geetacourse";

    const seasonPassImage = require("./Pass Front_page-0001.jpg")
    const seasonPassImageback = require("./Pass Back_page-0001.jpg")

    const handleSubmit = () => {
        if (password === correctPassword) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations 🎉',
                text: 'Your set for the event has been booked',
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
                    <div className="col-lg-5 col-md-6 col-sm-7 col-8 mx-auto">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            className="form-control border-dark border-3"
                            onChange={(e) => setPassword(e.target.value)}
                        /></div>
                    <br />
                    <button onClick={handleSubmit} style={{ marginTop: 10 }}>
                        Submit
                    </button>
                </>
            ) : (
                <>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <div>
                            <h3>Entry Pass to a Day of Patriotism & Pride!</h3>
                            <img
                                src={seasonPassImage}
                                alt="Season Pass"
                                style={{ maxWidth: "100%", marginTop: 20 }}
                            />
                            <img
                                src={seasonPassImageback}
                                alt="Season Pass back"
                                style={{ maxWidth: "100%", marginTop: 20 }}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default PasswordAccess;

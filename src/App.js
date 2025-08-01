import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRPage from "./QRPage";
import PasswordAccess from "./PasswordAccess";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRPage />} />
        <Route path="/season-pass-access" element={<PasswordAccess />} />
      </Routes>
    </Router>
  );
}

export default App;
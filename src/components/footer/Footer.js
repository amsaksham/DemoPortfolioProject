import React from "react";
import "./Footer.css";

// Recordendo que el font-awesome sirve para un formato de logo y mas. les deje el link en el README.md

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Saksham Gupta</h1>
        {/* <p style="color:#FF0000";>Red paragraph text</p> */}
        <p>Chitkara University, Rajpura</p>
        <p>2110996001</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>saksham6001.be21@chitkara.edu.in</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Angel Marte 'Nino'</div>
      </div>
    </footer>
  );
};

export default Footer;

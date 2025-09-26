import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "16px 0", textAlign: "center", color: "#888" }}>
      © {new Date().getFullYear()} Pimjo E-commerce
    </footer>
  );
};

export default Footer;

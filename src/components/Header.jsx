import React from "react";

export default function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <img src="/src/assets/react-logo.png" alt="React Logo" />
        <ul className="nav-links">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

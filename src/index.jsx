import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div className="root-div-container">
    <Header />
    <Page />
    <Footer />
  </div>
);

function Header() {
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

function Page() {
  return (
    <main className="main-container">
      <h1>Fun Facts about React</h1>

      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer-container">© 2025 Developed by Jhon Doe</footer>
  );
}

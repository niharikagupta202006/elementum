import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Elementum</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>

      <div className="menu-icon">
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
import "./Navbar.css";
import nostosNavbarLogo from "../../icons/logo-01.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 custom-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4">
        <ul className="nav d-none d-lg-flex gap-4 list-unstyled mb-0">
          <li>
            <a href="#products" className="nav-link-custom">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="#story" className="nav-link-custom">
              OUR STORY
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link-custom">
              CONTACT US
            </a>
          </li>
        </ul>

        <a
          href="#"
          className="navbar-brand text-center logo-text logo-centered logo-icon"
        >
          <img
            src={nostosNavbarLogo}
            alt="Nostos Ritual Logo"
            className="logo-icon"
          />
        </a>

        <div className="d-none d-lg-flex gap-3 bibi-pos">
          <a href="#" className="nav-link-custom">
            <i className="bi bi-instagram bibi-size"></i>
          </a>
          <a href="#" className="nav-link-custom">
            <i className="bi bi-envelope bibi-size"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

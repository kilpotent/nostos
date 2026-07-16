import "./Navbar.css";
import nostosNavbarLogo from "../../assets/icons/logo-01.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 custom-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Το logo μένει ΕΞΩ από το collapse div, ώστε να είναι πάντα ορατό,
            είτε το menu είναι ανοιχτό είτε κλειστό */}

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

        <div className="navbar-collapse-wrapper">
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-collapse-inner d-flex flex-column flex-lg-row w-100 align-items-lg-center">
              <ul className="nav gap-lg-4 list-unstyled mb-0 flex-column flex-lg-row">
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

              <div className="d-flex gap-3 bibi-pos mt-3 mt-lg-0 ms-lg-auto">
                <a href="#" className="nav-link-custom">
                  <i className="bi bi-instagram bibi-size"></i>
                </a>
                <a href="#" className="nav-link-custom">
                  <i className="bi bi-envelope bibi-size"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

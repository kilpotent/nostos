import "./Navbar.css";

// Γιατί function component και όχι class; Στη σύγχρονη React (με Hooks) γράφουμε
// σχεδόν πάντα function components. Είναι πιο απλά να διαβαστούν.
function Navbar() {
  return (
    // "navbar" = βασική Bootstrap κλάση, δίνει τη δομή flex.
    // "navbar-expand-lg" = σε μεγάλες οθόνες δείχνει τα links σε μια γραμμή,
    //   σε μικρές (κινητό) θα "μαζεύονταν" σε burger menu (αν προσθέσουμε toggler - εδώ το κρατάμε απλό).
    // "position-absolute" + "w-100" = ο navbar να "επιπλέει" πάνω από την hero εικόνα,
    //   αντί να πιέζει το section από κάτω.
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

        {/* Κέντρο λογότυπο. Το "mx-auto" (margin-x: auto) στο flex context
            το σπρώχνει στο κέντρο ανάμεσα στα άλλα δύο στοιχεία. */}
        <a
          href="#"
          className="navbar-brand text-center logo-text logo-centered logo-icon"
        >
          <img
            src="/src/assets/icons/logo-01.png"
            alt="Nostos Ritual Logo"
            className="logo-icon"
          />
        </a>

        {/* Δεξιά εικονίδια */}
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

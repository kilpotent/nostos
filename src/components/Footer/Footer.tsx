// src/components/Footer/Footer.tsx
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-4">
        <p className="footer-tagline text-center mb-4 footer-text offset-md-2">
          Every great story begins with a conversation.
        </p>

        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="/src/assets/icons/logo-02.png"
              alt="Nostos Ritual logo"
              className="footer-logo-icon"
            />
          </div>

          <div className="col-md-4 mb-4 mb-md-0 contact-info">
            <p>E.: hello@nostosritual.com</p>
            <p>P.: +30 210 123 4567</p>
            <p>I.: @nostosritual</p>
          </div>

          {/* ΕΝΑ μόνο col-md-4 τώρα, που περιέχει links ΚΑΙ icons μαζί,
              σε εσωτερικό flex container, ώστε να μοιράζονται την ίδια στήλη
              αντί να παίρνουν η καθεμιά ξεχωριστό col-md-4 (που ξεχείλιζε τα 12). */}
          <div className="col-md-4 d-flex justify-content-between">
            <div>
              <a href="#products" className="footer-link d-block contact-info">
                PRODUCTS
              </a>
              <a href="#about" className="footer-link d-block contact-info">
                OUR STORY
              </a>
              <a href="#contact" className="footer-link d-block contact-info">
                CONTACT US
              </a>
            </div>

            <div className="d-flex gap-3">
              <a href="#" className="footer-link">
                <i className="bi bi-instagram bibi-size"></i>
              </a>
              <a href="#" className="footer-link ">
                <i className="bi bi-envelope bibi-size"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

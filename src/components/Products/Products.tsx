import "./Products.css";

// Ορίζουμε το "σχήμα" των δεδομένων μας με TypeScript interface.
// Γιατί: το TypeScript θα μας προειδοποιήσει αν ξεχάσουμε ένα πεδίο
// ή αν γράψουμε λάθος τύπο δεδομένων (π.χ. αριθμό αντί για string).
function Products() {
  return (
    <section id="products" className="products-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">OUR PRODUCTS</h2>

        <img
          src="/src/assets/icons/bottles-image.png"
          alt="Nostos Ritual - Greek tsipouro bottle with glass and olives"
          className="d-block mx-auto products-image"
        />

        <p className="products-tagline mt-4">
          Every gathering begins with a return. A return to friends, to music,
          to tradition.
          <br />
          <strong> Nostos Ritual</strong> is a premium Greek tsipouro crafted
          for moments that deserve to become memories.
        </p>
      </div>
    </section>
  );
}

export default Products;

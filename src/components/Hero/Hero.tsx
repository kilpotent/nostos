import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    // Το section αυτό περιέχει τον Navbar μέσα του, γιατί ο Navbar είναι
    // "position-absolute" πάνω στην εικόνα — λογικά ανήκουν οπτικά μαζί.
    <section className="hero-section">
      <Navbar />
      {/* Εναλλακτικά θα μπορούσαμε να βάλουμε background-image με css,
          αλλά χρησιμοποιώ <img> tag εδώ γιατί δίνει καλύτερο SEO
          (οι μηχανές αναζήτησης "διαβάζουν" εικόνες, όχι css backgrounds)
          και είναι πιο εύκολο να κάνεις responsive/lazy-load αργότερα. */}
      <img
        src={heroImage}
        alt="Nostos Ritual - Greek tsipouro bottle by the sea at sunset"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;

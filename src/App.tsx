import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Το App.tsx είναι το "root" component - αυτό που η React φορτώνει πρώτο
// και μέσα του συναρμολογούμε όλα τα sections με τη σειρά που θέλουμε
// να εμφανίζονται στη σελίδα, από πάνω προς τα κάτω.
function App() {
  return (
    <div className="app">
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

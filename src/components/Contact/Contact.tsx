import { useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";
import contactImage from "../../assets/images/contact_us.png";

// Ορίζουμε το "σχήμα" των δεδομένων της φόρμας
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function Contact() {
  // Το useState μας δίνει 2 πράγματα:
  // 1) "formData" -> η τρέχουσα τιμή (like a snapshot)
  // 2) "setFormData" -> η ΜΟΝΗ σωστή function για να την αλλάξουμε.
  // ΠΟΤΕ δεν κάνουμε formData.firstName = "κάτι" απευθείας - το React
  // δεν θα το "καταλάβει" και δεν θα ξανα-ζωγραφίσει (re-render) τη σελίδα.
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Μία ενιαία function χειρίζεται ΟΛΑ τα inputs, αντί να γράφουμε
  // ξεχωριστή function για το καθένα. Δουλεύει επειδή κάθε input
  // έχει "name" attribute που ταιριάζει με το key στο FormData.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    // Το "..." (spread operator) αντιγράφει όλα τα υπάρχοντα πεδία,
    // και μετά αντικαθιστούμε ΜΟΝΟ το ένα που άλλαξε.
    // Γιατί δεν κάνουμε "formData.name = value" απευθείας; Γιατί στη React
    // το state πρέπει να είναι "immutable" - φτιάχνουμε πάντα ΝΕΟ object,
    // δεν τροποποιούμε το παλιό. Αυτό επιτρέπει στο React να συγκρίνει
    // παλιό/νέο state αποδοτικά.
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    // Χωρίς αυτό, το browser θα έκανε default συμπεριφορά:
    // reload ολόκληρης της σελίδας κατά το submit. Σε React apps αυτό
    // ΣΧΕΔΟΝ ΠΑΝΤΑ το αποτρέπουμε, γιατί χειριζόμαστε το submit εμείς.
    e.preventDefault();

    console.log("Form submitted:", formData);
    // Εδώ αργότερα θα βάλουμε πραγματική αποστολή (π.χ. σε email API).
    // Προς το παρόν απλά καθαρίζουμε τη φόρμα μετά το submit:
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-7 offset-lg-5 contact-form-wrapper">
            <h2 className="contact-title">Let's Raise a Glass Together</h2>
            <div className="contact-form-inner">
              <form onSubmit={handleSubmit}>
                <div className="row gx-3">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First name*</label>
                    <input
                      style={{ height: "40px" }}
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last name*</label>
                    <input
                      style={{ height: "40px" }}
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email*</label>
                  <input
                    style={{ height: "40px" }}
                    type="email"
                    name="email"
                    className="form-control "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    style={{ height: "80px" }}
                    name="message"
                    className="form-control "
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn contact-submit-btn ">
                  Submit
                </button>
              </form>
            </div>
            <p className="contact-handwritten">
              Whether you're interested
              <br />
              in our collection, collaborations
              <br />
              or simply want to share a story
              <br />
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

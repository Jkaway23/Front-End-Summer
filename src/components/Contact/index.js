import React, { useState } from "react";
import { db } from "../../config/Firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await addDoc(collection(db, "contacts"), form);
      setSuccess("Pesan berhasil dikirim!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Gagal mengirim pesan. Coba lagi nanti.");
    }
    setLoading(false);
  };

  return (
    <div className="content fifth-content">
      <div className="container-fluid">
        <div className="col-md-6">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63816.63425933547!2d124.8748285219865!3d1.4506193251275878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870a95df6309dd%3A0x21d86e4847556add!2sUniversitas%20Klabat!5e0!3m2!1sid!2sid!4v1751283763936!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <form id="contact" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name..."
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email..."
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject..."
                    required
                    value={form.subject}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <textarea
                    name="message"
                    rows="6"
                    className="form-control"
                    id="message"
                    placeholder="Your message..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    className="btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Now"}
                  </button>
                </fieldset>
                {success && (
                  <div style={{ color: "#4caf50", marginTop: 10 }}>
                    {success}
                  </div>
                )}
                {error && (
                  <div style={{ color: "#f44336", marginTop: 10 }}>{error}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

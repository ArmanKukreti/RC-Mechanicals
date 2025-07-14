import React, { useEffect, useState } from "react";
import { contactInfo } from "../Constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // ✅ success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show animation
    setFormSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });

    // Hide animation after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ padding: "8rem 0 5rem" }}
    >
      <h2
        className="text-3xl md:text-5xl font-bold text-black"
        style={{ marginBottom: "10px" }}
      >
        Contact Us
      </h2>

      <div
        className="bg-indigo-600 w-full max-w-xl h-[3px] rounded-xl"
        style={{ marginBottom: "24px" }}
      />

      <p
        className="text-lg sm:text-xl font-light max-w-2xl"
        style={{ marginBottom: "40px" }}
      >
        We'd love to hear from you! Reach out to us with any inquiries, project
        discussions, or feedback.
      </p>

      <section className="w-full bg-white" style={{ padding: "64px 24px" }}>
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 items-start"
          style={{
            gap: "48px",
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Contact Form */}
          <div
            className="bg-gray-100 rounded-xl shadow-lg order-1 md:order-2 flex flex-col items-center justify-center"
            style={{ padding: "32px" }}
          >
            {formSubmitted ? (
              <div
                className="w-full h-full flex flex-col items-center justify-center text-green-600"
                style={{
                  minHeight: "400px",
                  animation: "fadeInScale 0.4s ease-in-out",
                  padding: "32px",
                }}
              >
                <svg
                  width="80"
                  height="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="text-green-500 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg font-semibold text-green-700">
                  Thank you for reaching us! will get back to you soon
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="text-3xl font-bold text-gray-900"
                  style={{ marginBottom: "24px" }}
                >
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  {["name", "mobile", "email"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-gray-700 font-semibold"
                        style={{ marginBottom: "8px" }}
                      >
                        {field === "name"
                          ? "Name"
                          : field === "mobile"
                          ? "Mobile Number"
                          : "Email Address"}
                      </label>
                      <input
                        type={
                          field === "email"
                            ? "email"
                            : field === "mobile"
                            ? "tel"
                            : "text"
                        }
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        style={{ padding: "12px 16px" }}
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold"
                      style={{ marginBottom: "8px" }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 resize-y"
                      style={{ padding: "12px 16px" }}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    style={{ padding: "12px 24px", marginTop: "12px" }}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Details + Map */}
          <div
            className="bg-white rounded-xl shadow-lg flex flex-col justify-between text-left order-2 md:order-1"
            style={{
              padding: "32px",
              width: "100%",
            }}
          >
            <h2
              className="text-3xl font-bold text-gray-900"
              style={{ marginBottom: "24px" }}
            >
              Our Details
            </h2>

            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="text-xl font-semibold text-gray-800 flex items-center"
                  style={{ marginBottom: "8px" }}
                >
                  <span
                    className="text-indigo-600 text-2xl"
                    style={{ marginRight: "12px" }}
                  >
                    📍
                  </span>
                  Office Address
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold text-gray-800 flex items-center"
                  style={{ marginBottom: "8px" }}
                >
                  <span
                    className="text-indigo-600 text-2xl"
                    style={{ marginRight: "12px" }}
                  >
                    📞
                  </span>
                  Phone
                </h3>
                <p className="text-gray-700 text-base">
                  <a
                    href={`tel:${contactInfo.phone.split(",")[0].trim()}`}
                    className="hover:underline text-indigo-700"
                  >
                    {contactInfo.phone.split(",")[0].trim()}
                  </a>
                  ,{" "}
                  <a
                    href={`tel:${contactInfo.phone.split(" ")[1].trim()}`}
                    className="hover:underline text-indigo-700"
                  >
                    {contactInfo.phone.split(" ")[1].trim()}
                  </a>
                  {" "}
                  <a
                    href={`tel:${contactInfo.phone.split(" ")[2].trim()}`}
                    className="hover:underline text-indigo-700"
                  >
                    {contactInfo.phone.split(" ")[2].trim()}
                  </a>
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold text-gray-800 flex items-center"
                  style={{ marginBottom: "8px" }}
                >
                  <span
                    className="text-indigo-600 text-2xl"
                    style={{ marginRight: "12px" }}
                  >
                    📧
                  </span>
                  Email
                </h3>
                <p className="text-gray-700 text-base">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:underline text-indigo-700"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div
              className="rounded-lg overflow-hidden shadow-md"
              style={{ marginTop: "32px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473694.3358040232!2d72.76440665566737!3d21.944659962602362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a881152601%3A0x312ca552efdc97f3!2sGolden%20Square!5e0!3m2!1sen!2sin!4v1750167753678!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

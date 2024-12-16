import React, { useState } from "react";
import emailjs from "emailjs-com";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    to_name: "Your Name", // Default recipient name
    from_name: "",
    message: "",
    reply_to: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dq9txkw", // Replace with your EmailJS service ID
        "template_gyz56dh", // Replace with your EmailJS template ID
        formData, // Pass the formData object
        "_WRwKs5Bqmw5gPZxY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
      {isSubmitted ? (
        // Show a confirmation message after the form is submitted
        <div className="bg-conic-gradient text-black p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl">
            Your message has been sent successfully. I'll get back to you as
            soon as possible.
          </p>
        </div>
      ) : (
        <>
          <h1 className="h1 font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-gray-300 mb-8 text-center max-w-md">
            It would be a pleasure to hear from you <br />
            <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              &nbsp;Reach out anytime!&nbsp;
            </span>
          </p>

          <form
            className="w-full max-w-lg bg-gray-700  bg-opacity-50 text-white shadow-md rounded-lg p-8 relative z-10"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block text-gray-300 font-bold mb-2"
                htmlFor="from_name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block text-gray-300 font-bold mb-2"
                htmlFor="reply_to"
              >
                Your Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                className="block text-gray-300 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 rounded-lg shadow-sm  focus:ring-blue-300 p-2 h-28"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </>
      )}
    </div>
  );
};

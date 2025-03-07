import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center pt-24 py-16 px-6">
  
      <div className="text-center mb-12 animate-slideRight">
        <h2 className="text-5xl font-bold text-cyan-400">
          Contact <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Let's connect! Feel free to reach out.
        </p>
      </div>

    
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 animate-slideUp">
        
        <div className="bg-gray-800 p-10 rounded-2xl shadow-lg flex-1 border border-gray-700">
          <h3 className="text-3xl text-cyan-400 mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-3xl text-red-400" />
              <p className="text-lg text-gray-300">nishantbharati@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-green-400" />
              <p className="text-lg text-gray-300">+91 9876543210</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-blue-400" />
              <p className="text-lg text-gray-300">Bhopal, India</p>
            </div>
          </div>
        </div>

      
        <div className="bg-gray-800 p-10 rounded-2xl shadow-lg flex-1 border border-gray-700">
          <h3 className="text-3xl text-cyan-400 mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
           
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-cyan-400 border border-cyan-400 transition"
            >
              Send Message
            </button>
          </form>

        
          {status && (
            <p className="mt-4 text-center text-lg font-semibold text-gray-300">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

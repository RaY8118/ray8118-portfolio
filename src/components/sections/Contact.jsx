import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      toast.success("Message sent successfully!!")
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Oops! Something went wrong. Please try again.")
    }
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 pt-24"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-teal-300 via-cyan-200 to-white bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/RaY8118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <svg width="47.979" height="47" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.979 47"><path fillRule="evenodd" clipRule="evenodd" d="M23.918 0C10.692 0 0 10.771 0 24.096c0 10.651 6.851 19.667 16.354 22.859 1.188 0.24 1.623 -0.518 1.623 -1.156 0 -0.559 -0.039 -2.473 -0.039 -4.468 -6.653 1.436 -8.039 -2.872 -8.039 -2.872 -1.069 -2.793 -2.654 -3.51 -2.654 -3.51 -2.178 -1.476 0.159 -1.476 0.159 -1.476 2.416 0.16 3.683 2.473 3.683 2.473 2.138 3.67 5.583 2.633 6.969 1.995 0.198 -1.556 0.832 -2.633 1.505 -3.231 -5.307 -0.559 -10.89 -2.633 -10.89 -11.889 0 -2.633 0.95 -4.787 2.455 -6.462 -0.237 -0.598 -1.069 -3.072 0.238 -6.383 0 0 2.02 -0.638 6.573 2.473a23.01 23.01 0 0 1 5.98 -0.798c2.02 0 4.078 0.28 5.979 0.798 4.554 -3.112 6.574 -2.473 6.574 -2.473 1.307 3.311 0.475 5.785 0.237 6.383 1.545 1.675 2.455 3.83 2.455 6.462 0 9.256 -5.583 11.29 -10.929 11.889 0.871 0.758 1.623 2.194 1.623 4.468 0 3.231 -0.039 5.825 -0.039 6.622 0 0.638 0.436 1.397 1.623 1.157 9.504 -3.192 16.354 -12.208 16.354 -22.859C47.836 10.771 37.104 0 23.918 0" fill="#fff" /></svg>
            </a>

            <a
              href="https://linkedin.com/in/parth-ghadi-327219247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg fill="#ffffff" width="48px" height="48px" viewBox="-0.12 -0.12 1.44 1.44" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-linkedin"><path d="M1.198 0.703v0.443h-0.257v-0.413c0 -0.104 -0.037 -0.175 -0.13 -0.175 -0.071 0 -0.113 0.048 -0.132 0.094 -0.007 0.017 -0.009 0.039 -0.009 0.063v0.431h-0.257s0.003 -0.7 0 -0.772h0.257v0.109l-0.002 0.003h0.002v-0.003c0.034 -0.052 0.095 -0.128 0.231 -0.128 0.169 0 0.296 0.11 0.296 0.348M0.145 0.002C0.057 0.002 0 0.059 0 0.135c0 0.074 0.056 0.133 0.142 0.133h0.002c0.09 0 0.145 -0.059 0.145 -0.133C0.287 0.059 0.233 0.002 0.145 0.002zM0.015 1.146h0.257V0.374H0.015z" /></svg>
            </a>

            <a
              href="https://ray8118.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Hashnode Blog"
            >
              <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g fillRule="evenodd"><path d="M3.298 16.037c-4.398 4.398 -4.398 11.527 0 15.925l12.739 12.739c4.398 4.397 11.527 4.397 15.925 0l12.739 -12.739c4.397 -4.398 4.397 -11.527 0 -15.925L31.962 3.298c-4.398 -4.397 -11.527 -4.397 -15.925 0zm26.275 13.536c3.078 -3.079 3.078 -8.069 0 -11.147 -3.078 -3.079 -8.069 -3.079 -11.147 0 -3.079 3.078 -3.079 8.069 0 11.147 3.078 3.078 8.069 3.078 11.147 0z" fill="#2962FF" /></g></svg>
            </a>
          </div>
          <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r  from-teal-300 via-cyan-200 to-white bg-clip-text text-transparent">
            Send Me a Message
          </h2>
          <form
            className="space-y-6 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="relative space-y-6">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                placeholder="Your Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={6}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_147s68h',      // Your Service ID
      'template_obu0dwj',     // Your Template ID
      form.current, 
      'MCRFec8BeLn3iJMc2'     // Your Public Key
    )
    .then(() => {
        setIsSent(true);
        setLoading(false);
        e.target.reset(); 
        setTimeout(() => setIsSent(false), 5000); 
    }, (error) => {
        console.log("FAILED...", error.text);
        setLoading(false);
        alert("An error occurred. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-white inline-block pb-2">
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 text-left">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-200">Contact Information</h3>
              <p className="text-gray-300">
                I am currently open to new opportunities.<br/>
                Feel free to send me a message!
              </p>
              
              <div className="space-y-6">
                {/* Clickable Email */}
                <a 
                  href="mailto:youssef.hergli@polytechnicien.tn" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-blue-300 transition-colors group"
                >
                  <div className="p-3 bg-blue-800 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="text-sm md:text-base border-b border-transparent group-hover:border-blue-300">
                    youssef.hergli@polytechnicien.tn
                  </span>
                </a>

                {/* Clickable Phone */}
                <a 
                  href="tel:+21658780900" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-blue-300 transition-colors group"
                >
                  <div className="p-3 bg-blue-800 rounded-full group-hover:bg-blue-700 transition-colors">
                    <Phone size={24} />
                  </div>
                  <span className="text-sm md:text-base border-b border-transparent group-hover:border-blue-300">
                    +216 58780900
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-800 rounded-full"><MapPin size={24} /></div>
                  <span className="text-sm md:text-base">Monastir, Tunisia</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6 pt-10 mt-10 border-t border-blue-800">
              <a href="https://www.linkedin.com/in/youssef-hergli/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                <Linkedin size={28} /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Hergliyoussef" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                <Github size={28} /> <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900">
            {isSent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-pulse">
                <CheckCircle size={60} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-600">Thank you, I will get back to you soon.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" name="name" required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" name="email" required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    name="message" rows="4" required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" disabled={loading}
                  className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In <span className="gradient-text">Touch</span></h2>
            <p className="text-slate-400 mb-8 max-w-lg">
              Have a project in mind or want to discuss potential collaborations? Feel free to reach out through the form or connect with me on social media.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-slate-400">hello@aideveloper.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href="#" className="social-icon bg-slate-800 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="social-icon bg-slate-800 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="social-icon bg-slate-800 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="social-icon bg-slate-800 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Project discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

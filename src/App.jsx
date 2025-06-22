import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Send, User, MessageSquare, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! Thank you for reaching out.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const projects = [
    {
      title: "Apple DCF Valuation Breakdown",
      description: "Comprehensive discounted cash flow analysis of Apple Inc. using advanced financial modeling techniques and market comparables.",
      tech: ["Excel", "Python", "Financial Modeling"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Crypto Pump and Dump Detection",
      description: "ML-powered system detecting fraudulent cryptocurrency schemes using pattern recognition and volume analysis algorithms.",
      tech: ["Python", "TensorFlow", "Data Analysis"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Q-Learning Based Recommendation System",
      description: "Reinforcement learning model optimizing user recommendations through continuous feedback and behavioral pattern analysis.",
      tech: ["Python", "Q-Learning", "Machine Learning"],
      color: "from-violet-500 to-violet-600"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900 dark:text-white">HS</div>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Harshit <span className="text-blue-600">Singh</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Future Investment Banker | Builder | Relentlessly Curious
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                Transforming complex financial landscapes through analytical rigor and innovative thinking. Building the future of finance, one model at a time.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:harshit@example.com" className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Work
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <User className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">IIT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing excellence at <strong>IIT Bombay</strong>, I'm driven by an insatiable curiosity to decode the complexities of global financial markets. My passion lies at the intersection of traditional investment banking and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I leverage tech-driven productivity systems to optimize analytical workflows and build high-impact communities that foster intellectual growth. My polymath approach combines rigorous financial modeling with innovative problem-solving methodologies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">IIT</div>
                <div className="text-gray-600 dark:text-gray-400">Bombay</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                <div className="text-gray-600 dark:text-gray-400">Curiosity</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-gray-600 dark:text-gray-400">Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Resume</h2>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 mb-8">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Download className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Resume Preview</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Comprehensive overview of my academic achievements, professional experience, and technical skills
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, or potential collaborations in finance and technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">harshit.singh@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">linkedin.com/in/harshitsingh</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">github.com/harshitsingh</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your message..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Harshit Singh. Designed & built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
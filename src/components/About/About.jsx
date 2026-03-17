import React, { useState, useRef, useEffect } from 'react';
import { FileText, User, ChevronDown, Globe, Cpu, Brain, Rocket } from 'lucide-react';

const About = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-10">
          <User className="text-blue-900" size={32} />
          <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-blue-900 inline-block">
            Who I Am?
          </h2>
        </div>

        {/* Introduction Text */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
          <p>
            My name is <strong>Youssef Hergli</strong>. I am a final-year <strong>Data Science & AI Engineering student</strong> at the <strong>Polytechnic School of Sousse</strong>.
          </p>

          <p>
            With a solid foundation built during my <strong>National Bachelor's degree in Industrial Computing</strong>, I have developed a unique perspective that bridges the gap between hardware-level efficiency and advanced intelligent systems.
          </p>

          <p>
            I am deeply <strong>passionate about new technologies</strong> and dedicated to leveraging them to solve complex, real-world problems. My goal is to design and deploy innovative AI solutions that drive performance and create meaningful impact.
          </p>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl text-center">
              <Cpu className="text-blue-900 mb-2" size={28} />
              <span className="text-sm font-bold text-blue-900 uppercase">Industrial Computing</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl text-center">
              <Brain className="text-blue-900 mb-2" size={28} />
              <span className="text-sm font-bold text-blue-900 uppercase">AI & Data Science</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl text-center">
              <Rocket className="text-blue-900 mb-2" size={28} />
              <span className="text-sm font-bold text-blue-900 uppercase">Tech Innovation</span>
            </div>
          </div>
        </div>

        {/* CV Download Dropdown */}
        <div className="relative mt-12 inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-95"
          >
            <FileText size={20} />
            Check My Resume
            <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-20 overflow-hidden">
              <div className="py-1">
                <a
                  href="/CV_Hergli_Youssef_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                >
                  <Globe size={18} className="text-blue-600" />
                  English Version
                </a>
                <a
                  href="/CV_Hergli_Youssef_FR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors border-t border-gray-100"
                >
                  <Globe size={18} className="text-red-600" />
                  French Version
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
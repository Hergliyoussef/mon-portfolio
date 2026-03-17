import React from 'react';
import { Brain, PieChart, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MoodMate - Psychological Chatbot",
      date: "Nov 2025 – Jan 2026",
      desc: "Empathetic AI designed to detect emotions and generate contextually appropriate responses.",
      tech: "DistilBERT, Gemma-2-2B-IT, FastAPI, Streamlit",
      icon: <Brain className="text-purple-600" size={32} />,
      details: "Leveraged DistilBERT for sentiment prediction and Gemma-2 for natural language generation."
    },
    {
      title: "Agrifood Quality Control",
      date: "Jan 2025 – Apr 2025",
      desc: "Machine Learning system developed to classify juice quality based on experimental data.",
      tech: "Scikit-learn, Pandas, NumPy, Matplotlib",
      icon: <PieChart className="text-green-600" size={32} />,
      details: "Evaluated and compared various Classification and Regression algorithms for high accuracy."
    },
    {
      title: "Intelligent OCR-GED (VAERDIA Internship)",
      date: "Jul 2025 – Aug 2025",
      desc: "Automation of insurance claim management through advanced document processing.",
      tech: "Python NLP, Tesseract OCR, SpaCy, PostgreSQL",
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      details: "Implemented automated reading, verification, and classification of submitted documents."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 border-b-4 border-blue-900 inline-block">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{project.date}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.desc}</p>
                <p className="text-gray-500 italic text-xs mb-6 border-l-2 border-gray-200 pl-3">
                  {project.details}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((t, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
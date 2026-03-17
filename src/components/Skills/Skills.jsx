import React from 'react';
import { Brain, Code, Database, BarChart3, Cloud, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-purple-600" />,
      skills: ["TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "PCA", "KMeans"]
    },
    {
      title: "NLP & LLM",
      icon: <Code className="text-blue-600" />,
      skills: ["Hugging Face", "DistilBERT", "Gemma-2-2B-IT", "SpaCy", "NLTK", "Tesseract OCR"]
    },
    {
      title: "Visualization & Data",
      icon: <BarChart3 className="text-green-600" />,
      skills: ["Matplotlib", "Seaborn", "Power BI", "R (Tidyverse)"]
    },
    {
      title: "Web Development",
      icon: <Layout className="text-orange-600" />,
      skills: ["FastAPI", "React.js", "Node.js", "Express.js", "Streamlit"]
    },
    {
      title: "Databases",
      icon: <Database className="text-red-600" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Tools & Cloud",
      icon: <Cloud className="text-cyan-600" />,
      skills: ["Git", "Docker", "Microsoft Azure", "Google Colab", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          <span className="underline">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
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

export default Skills;
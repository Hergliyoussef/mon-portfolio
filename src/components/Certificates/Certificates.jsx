import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certs = [
    { 
      name: "IT Specialist Data Analytics", 
      org: "Certiport", 
      year: "2025",
      link: "https://www.credly.com/badges/25df3098-65e5-4e18-8b00-fb7ec8d702ba/public_url" // REMPLACE PAR TON LIEN CREDLY
    },
    { 
      name: "Introduction to Tidyverse / R", 
      org: "DataCamp", 
      year: "2025",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cb5ac8073044f76c132d1fb4535085b31e54c05f" // LIEN DATACAMP
    },
    { 
      name: "IT Specialist Python", 
      org: "Certiport", 
      year: "2024",
      link: "https://www.credly.com/badges/a37ea121-74d6-4019-8889-9ced952b7c7c/public_url" // REMPLACE PAR TON LIEN CREDLY
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 flex items-center gap-3">
          <Award size={32} /> <span className="underline">Certificates</span> 
        </h2>
        
        <div className="grid gap-6">
          {certs.map((c, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-6 rounded-xl border-l-8 border-blue-900 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-900 transition-colors">
                  {c.name}
                </h3>
                <p className="text-gray-500 font-medium">{c.org} • {c.year}</p>
              </div>
              
              <a 
                href={c.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition-all text-sm"
              >
                Verify Credly
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
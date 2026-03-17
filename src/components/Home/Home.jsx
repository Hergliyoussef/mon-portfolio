import React, { useState, useEffect } from 'react';

const Home = () => {
  // Les titres que tu veux afficher en boucle
  const titles = [
    "AI / Data Engineering student ",
    
  ];

  // États pour gérer l'animation
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30); // Vitesse d'écriture par défaut

  useEffect(() => {
    // Le titre complet que l'on est en train d'écrire/effacer
    const fullTitle = titles[currentTitleIndex];

    const handleTyping = () => {
      // Déterminer le texte à afficher à cet instant
      if (isDeleting) {
        // En train d'effacer : on enlève un caractère
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        setTypingSpeed(100); // Plus rapide pour effacer
      } else {
        // En train d'écrire : on ajoute un caractère
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        setTypingSpeed(80); // Vitesse normale d'écriture
      }

      // Gérer les transitions écriture/pause/effacement
      if (!isDeleting && currentText === fullTitle) {
        // Titre entièrement écrit : faire une pause avant d'effacer
        setTimeout(() => setIsDeleting(true), 1500); // Pause de 1.5s
      } else if (isDeleting && currentText === '') {
        // Titre entièrement effacé : passer au titre suivant
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    // Créer le timer pour la prochaine étape de l'animation
    const timer = setTimeout(handleTyping, typingSpeed);

    // Nettoyer le timer pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-blue-900 text-white px-6 text-center">
      <h2 className="text-blue-300 text-xl md:text-2xl font-medium mb-2">
        Hello, my name is
      </h2>
       <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hergli Youssef
      </h1>
      <h2 className="text-blue-300 text-xl md:text-2xl font-medium mb-2">
        And I'm a :
      </h2>
     
      
      {/* SECTION ANIMÉE */}
      <div className="text-2xl md:text-3xl text-gray-200 max-w-2xl font-mono min-h-[40px]">
        {/* Ton titre dynamique */}
        <span className="border-r-2 border-white pr-1 animation-blink">
          {currentText}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a href="#contact" 
        className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import img1 from '../../images/img-top.jpg';
import img2 from '../../images/img-top2.jpg';
import img3 from '../../images/img-top3.jpg';
import './img-top.css';

function Imagetop() {
  const [currentImage, setCurrentImage] = useState(1);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
  };

  // Utilisez useEffect pour définir l'intervalle de changement d'image
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Changement toutes les 5 secondes

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getImageSource = () => {
    switch (currentImage) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      default:
        return img1;
    }
  };

  return (
    <div className="image-top">
      <img src={getImageSource()} className="img-top" alt="img" />
      <h1 className="text-img-top">Portfolio</h1>
    </div>
  );
}

export default Imagetop;
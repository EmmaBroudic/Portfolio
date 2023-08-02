import React, { useState, useEffect } from 'react';
import img1 from '../../images/img-top.jpg';
import img2 from '../../images/img-top2.jpg';
import img3 from '../../images/img-top3.jpg';
import img4 from '../../images/img-top4.jpg';
import './img-top.css';

/* Ce bloc de code correspond au slider visible sur la page home et sur
la page contact. */

function Imagetop() {
  const [currentImage, setCurrentImage] = useState(1);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
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
      case 4:
        return img4;
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
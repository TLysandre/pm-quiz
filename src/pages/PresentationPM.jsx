import React from 'react';
import '../styles/presentationPM.css';

const pmData = [
  {
    name: 'Luka Maret',
    image: '/assets/luka.png',
    description: "Luka Maret, l'incarnation même de la beauté ! On dit que même les dieux grecs se retournent sur son passage. Sa présence illumine n'importe quelle pièce. Attention, son sourire est si éblouissant qu'il peut provoquer des éclipses solaires !",
  },
  {
    name: 'Eloïse Petrequin',
    image: '/assets/eloise.png',
    description: "Eloïse Petrequin, la grande siffloteuse fanatique de canards ! Elle est aussi connue pour son talent artistique, capable de transformer n'importe quel objet en chef-d'œuvre. Son secret ? Beaucoup d'amour et un soupçon de folie !",
  },
];

const PresentationPM = () => {
  return (
    <div className="crazy-pms-page">
      <h1>Mes PM de fous 🔥</h1>
      <div className="pm-list">
        {pmData.map((pm, index) => (
          <div key={index} className="pm-card">
            <h1 className="pm-name">{pm.name}</h1>
            <img src={pm.image} alt={pm.name} className="pm-image" />
            <p className="pm-description">{pm.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationPM;

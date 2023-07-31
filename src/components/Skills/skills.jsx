import React from 'react'; /* nécessaire ? */
import ReusableCollapse from '../Reu-collapse/reu-collapse.jsx';
import { competences } from '../../data/competences.jsx';
import nuage from '../../images/nuage-de-mots.png';
import './skills.css';

function Skills() {

    const infoCompetences = competences.map((competence) => ({
        id: competence.id,
        titre: <h2 className = "infos-titre">{competence.title}</h2>,
        descriptif: <p className = "infos-text">{competence.text}</p>,
      }));
    
    return (
        <div className = "infos-bloc">
            <ReusableCollapse data = { infoCompetences } />
            <img src = {nuage} className = "nuage" alt = "nuage de mots" />
        </div>
    )
}

export default Skills;
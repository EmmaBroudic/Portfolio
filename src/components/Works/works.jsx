import work1 from '../../images/img1.jpg';
import work2 from '../../images/img2.jpg';
import './works.css';

/* Ce bloc de code réunit les différents éléments présents
dans la partie "travaux récents" de la page home */

function Works() {
    return (
        <div className = "works">
            <div className = "works-bloc">
                <a href="https://emmabroudic.github.io/Projet5/">
                    <img src = {work1} className = "work-img" alt = "site web 1" />
                </a>
                <a href="https://emmabroudic.github.io/Projet5/">
                    <h3 className = "titre-work">Débuggez et optimisez un site de photographe</h3>
                </a>
                <p className = "technos">Corriger le code, le refactoriser et ajouter les éléments nécessaires pour que celui-ci apparaisse dans les premiers résultats sur les moteurs de recherche.</p>
                <p className = "technos">Pour répondre aux problématiques de ce projet, j'ai utilisé différents outils comme AudiLighthouse et GTMetrix afin d'identifier les blocs de code à retravailler. Par ailleurs, j'ai effectué quelques ajouts comme les Google Rich Snippets. Ces différentes actions sont potentiellement intéressantes pour le référencement d'un site web. Par ailleurs, j'ai travaillé avec l'outil Waves afin d'améliorer l'accessibilité du site. Notamment le contraste, les textes alternatifs ou l'arborescence du contenu.</p>
                <p className = "technos">Technologies abordées : HTML, CSS, Javascript, Jquery</p>
                <p className = "technos">Compétences développées : optimiser les performances d'un site web, débugger un site web grâce aux chrome dev tools, rediger un cahier de recette pour tester un site, produire du contenu web accessible.</p>
            </div>
            <div className = "works-bloc">
                <a href="https://github.com/EmmaBroudic/projet7">
                    <img src = {work2} className = "work-img" alt = "site web 2" />
                </a>
                <a href="https://github.com/EmmaBroudic/projet7">
                    <h3 className = "titre-work">Développez le back-end d'un site de notation de livres</h3>
                </a>
                <p className = "technos">Construire la partie back-end à l'aide de l'environnement de travail Node JS et d'une base de données NoSQL.</p>
                <p className = "technos">Pour répondre aux problématiques de ce projet, j'ai travaillé avec l'environnement de travail NodeJS. J'ai construit l'architecture du back-end de façon à ce que celui-ci soit découpé en fichiers et dossiers spécifiques : le serveur, la racine de l'application, le routage, les schémas de données, la logique métier et les middlewares. J'ai construit une API répondant aux différents besoins du front-end. J'ai développé une couche middlewares permettant d'affiner les fonctionnalités et de sécuriser l'application.</p>
                <p className = "technos">Technologies abordées : NodeJS, Express, MongoDB, Multer, Sharp, Bcrypt.</p>
                <p className = "technos">Compétences développées : implémenter un modèle logique de données conformément à la réglementation, mettre en oeuvre des opérations CRUD de façon sécurisée, stocker des données de manière sécurisée.</p>
            </div>
        </div>
    )
}

export default Works;
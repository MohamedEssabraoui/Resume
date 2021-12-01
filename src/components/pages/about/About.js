import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>PROFIL</strong>
          </h6>
          <p className="grey-text">
          Jeune diplômé en informatique avec plus de 2 ans d'expérience professionnelle dans le développement 
          de logiciels et la création de sites web, particulièrement motive pour l'apprentissage, 
          A l’écoute du marché actuellement pour une position de développeur-analyste ou technicien de support 
          informatique.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>INFOS PERSONNELLES</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Adresse:</strong> 1159 Hay Massira 1, Temara 
              </p>
              <p>
                <strong>Email:</strong> mohamedessabraoui@gmail.com
              </p>
              <p>
                <strong>Téléphone:</strong> +212 666 91 29 54
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Langues</strong> - Arabic - Français - English
              </p>
              <p>
                <strong>Age</strong> - 27 ans
              </p>
              <p>
                <strong>Permit de conduit</strong> - type B
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

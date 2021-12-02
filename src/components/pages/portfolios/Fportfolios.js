import React from "react";
import imggt from './images/GT.png'
import imgr from './images/Resum.png'
import imgdv from './images/DeluxeV.png'
export default function Fportfolios() {
    return (
        
        <div class="card">
            <div className="card-content">
            <div style={{display:"inline-block"}}>
                 <h6>
                    <strong>PORTFOLIOS</strong>
                </h6>
            </div>
            <div class="flex-container">
                <div class="card" style={{width: "30%"}}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={imggt} alt="ima"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Global Warming Project<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://globaltemperature.herokuapp.com/" target="_blank" rel="noopener noreferrer">Site Web</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Réchauffement Climatique<i class="material-icons right">close</i></span>
                        <p>Data science sur le réchauffement climatique dans le cadre d'un projet de fin d'études</p>
                    </div>
                </div>

                <div class="card" style={{width: "30%"}}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={imgr} alt="ima"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Curriculum Vitæ<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://resumeessabraoui.herokuapp.com/" target="_blank" rel="noopener noreferrer">Site Web</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">CV<i class="material-icons right">close</i></span>
                        <p>Il s'agit en général du parcours scolaire et/ou professionnel</p>
                    </div>
                </div>

                <div class="card" style={{width: "30%"}}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={imgdv} alt="ima"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">deluxe-voyages Site<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://deluxe-voyages.business.site/">Site Web</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">deluxe-voyages Site<i class="material-icons right">close</i></span>
                        <p>Version 1.0 Developer avec Joomla.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


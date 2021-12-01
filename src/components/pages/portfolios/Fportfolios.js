import React from "react";
import imgd from '../../../images/person1.jpg'
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
                        <img class="activator" src={imgd} alt="ima"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                        <p><a href="/">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

                <div class="card" style={{width: "30%"}}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={imgd} alt="ima"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                        <p><a href="/">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

                <div class="card" style={{width: "30%"}}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={imgd} alt="ima"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                        <p><a href="/">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


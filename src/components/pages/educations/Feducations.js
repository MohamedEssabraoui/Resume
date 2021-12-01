import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Feducations() {
    return (
		
        <div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>FORMATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Diplôme</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Licence professionnelle en Système d’Information et BIG DATA 
									<br/><small>ESTS - École Supérieure de Technologie – Salé</small> 
								</td>
								<td>(2020-2021)</td>
								<td>
									<Link to={{ pathname:"/details", state:{id:"f0"}}} class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Diplôme Technicien Spécialisé en Développement Informatique 
									<br/><small>Institut Spécialisé de Technologie Hay Riad (N.T.I.C), Rabat</small>
								</td>
								<td>(2012-2014)</td>
								<td>
									<Link to={{ pathname:"/details", state:{id:"f1"}}} class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Baccalauréat PC 
									<br/><small>Lycée Arbi Doughmi, Temara</small>
								</td>
								<td>(2011-2012)</td>
								<td>
									<Link to={{ pathname:"/details", state:{id:"f2"}}} class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
    );
}



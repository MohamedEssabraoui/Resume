import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Fexperiences from './experiences/Fexperience';
import Feducations from './educations/Feducations';
import Fskills from './skills/Fskills';
import Fportfolios from './portfolios/Fportfolios';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Fskills />
							<Fexperiences />
							<Feducations />
							<Fportfolios />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

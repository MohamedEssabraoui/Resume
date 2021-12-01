import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/IMG_3615.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						React Developer
					</span>
					<p>Front-End Web Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
					<a  href="https://www.facebook.com/Med.ess.cr7/" target="_blank" rel="noopener noreferrer">
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'/>
					</a>	
					<a  href="https://www.linkedin.com/in/mohamed-essabraoui-a32230159/" target="_blank" rel="noopener noreferrer">	
						<i className='fab fa-linkedin-in grey-text text-darken-4 social_style'/>
					</a>
					<a  href="https://www.instagram.com/med_es7/" target="_blank" rel="noopener noreferrer">
						<i className='fab fa-instagram grey-text text-darken-4 social_style'/>
					</a>
					
					</p>
				</div>
			</div>
		</div>
	);
}

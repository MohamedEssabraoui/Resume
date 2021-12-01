import React, { Component } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Feducations from './Feducations';

export default class Educations extends Component {
	render(){
		return (
		  <section>
			<Navbar />
			<Feducations/>
		  </section>
		);
	  }
}

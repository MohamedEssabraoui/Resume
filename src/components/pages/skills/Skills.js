import React, { Component } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Fskills from './Fskills';

export default class Skills extends Component {
  render(){
    return (
      <section>
        <Navbar/>
        <Fskills/>
      </section>
    );
  }
}

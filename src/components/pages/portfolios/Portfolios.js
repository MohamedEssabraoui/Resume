import React, { Component } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Fportfolios from './Fportfolios';

export default class Portfolios extends Component {
  render(){
    return(
      <section>
        <Navbar/>
        <Fportfolios/>
      </section>
    );
  }
}

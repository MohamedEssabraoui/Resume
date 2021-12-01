import React from 'react';
import Imgbac from './bac1.jpg';
import ImgAtt from './AttLP.jpg';
import ImgDip from './dip.jpg';
import imgd from '../../../../images/person1.jpg'
import { useLocation } from 'react-router';

export default function Details() {

    const location = useLocation()
    const {id} = location.state
    let ImgF=imgd
    switch (id){
    case "f0":  
        ImgF=ImgAtt;
        break;
    case "f1":
        ImgF=ImgDip;
        break;
    case "f2":
        ImgF=Imgbac;
        break;
    default:
        ImgF=imgd;
    }
    return (
        <div class="row">
        <div class="col s12 m7"  style={{width :'30%'}}>
          <div class="card Small">
            <div class="card-image">
              <img src={ImgF} alt="imgage"/>
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <p>.</p>
            </div>
            <div class="card-action">
              <a href="/">Return home</a>
            </div>
          </div>
        </div>
      </div>   
        ) ;
}

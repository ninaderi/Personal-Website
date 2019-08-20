import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import {Grid,Cell} from 'react-mdl';
import nilou from './assets/nilou.jpg';

import './App.css';

class AboutMe extends Component {

  render() {
    return (

      <div className="aboutme-body">

        <div className="aboutme-grid">

          <div className = "right">
           <img src={nilou} className="image-set"/>
          </div>

          <div div className = "left">
            2
          </div>

        </div>
        
      </div>
    )
}

}

export default AboutMe;
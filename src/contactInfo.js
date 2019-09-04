import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,Chip } from 'react-mdl';
import './App.css';
import Particles from 'react-particles-js';
import{FaDownload,FaEnvelope,FaPhone} from 'react-icons/fa';

class Contact extends Component {
 
 linkToResume = () => {
  window.location.href = "https://drive.google.com/open?id=1nHeljRMffrg3zWyJbKx1NuTZFz0f4szw"
 }
  
  render() {
    return(
      
      
       <div className="contact-body">
          
        
        <div className="contact-grid">
          <div className="right">
            <h2>Niloufar Naderi</h2>
            <h4> Hey there! This is Nilou! Feel free to reach out if you need my help! </h4>
            <img
              src='http://askatechteacher.com/wp-content/uploads/2013/11/CONTACT-ME.jpg'
           
              style={{height: '300px', width: '75%'}}
               />
           </div>

          <div className="left">
          <h2>Contact Me</h2>
          
            
            <div className="contact-list">
              <ul style={{type:'circle'}} className="ulist">
                <li style={{fontSize: '15px',margin:'auto'}}>
                
                
                  <FaPhone className="iconColor animated swing delay-1s duration-60s"/> - (226)-234-2444
                  
            
                </li>
               
                  <li style={{margin:'auto',fontSize: '15px'}}>
                  <FaEnvelope className="iconColor animated heartBeat delay-3s duration-60s" onClick={this.mailTo}/> - nina8867@gmail.com
                </li>
                  
                  <Chip onClick={this.linkToResume}>Resume here</Chip>
                 
            
              </ul>
               </div>
          </div>
        </div>
          
        </div> 
      
    
    )
  }
}
export default Contact;
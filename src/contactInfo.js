import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,Chip } from 'react-mdl';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
 
  
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
                
                
                  <FontAwesomeIcon icon={faPhone}/> - (226)-234-2444
                  
            
                </li>
               
                  <li style={{margin:'auto',fontSize: '15px'}}>
                  <FontAwesomeIcon icon={faEnvelope} className="iconColor animated bounce delay-5s duration-30s"/> - nina8867@gmail.com
                </li>
                  
                  <Chip >Resume here</Chip>
                 
            
              </ul>
               </div>
          </div>
        </div>
          
        </div> 
      
    
    )
  }
}
export default Contact;
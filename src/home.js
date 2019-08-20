import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import Main from './main';
import AboutMe from './about_me';
// import Resume from './resume';
import Contact from './contactInfo'

const Home = () =>(
      <Switch >
       <Route exact path="/" component={AboutMe} ></Route>
       <Route path="/contact" component={Contact}></Route>
       <Route path="/aboutme" component={AboutMe}></Route>
       </Switch>
);
export default Home;
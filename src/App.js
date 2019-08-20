import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Home from './home';
import {Link} from 'react-router-dom';
import './App.css';
// import "animate.css";
// import A from './a';

class App extends React.Component {
render() {
 return (
     <div>
   <div className="demo-big-content">
   <Layout>
       <Header className ="header-color" title="Niloufar Naderi" scroll >
           <Navigation >
               <Link to="/">About me</Link>
               <Link to="/resume">Resume</Link>
               {/* <Link to="/aboutme">About me</Link> */}
               <Link to="/contact">Contact</Link>
           </Navigation>
       </Header>
       <Drawer title="Title">
           <Navigation>
               <Link to="/main">About me</Link>
               <Link to="/resume">Resume</Link>
               {/* <Link to="/aboutme">About me</Link> */}
               <Link to="/contact">Contact</Link>
               </Navigation>
       </Drawer>
       <Content>
           <div className="page-content" />
           <Home/>
       </Content>
   </Layout>
</div>
</div> );
}
}
export default App;
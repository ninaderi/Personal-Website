import React from 'react';
import {Layout,Header,Navigation,Drawer,Content, Textfield} from 'react-mdl';
import Home from './home';
import {Link} from 'react-router-dom';
import './App.css';
// import "animate.css";
// import A from './a';

class App extends React.Component {
  gettext() {
    var texting=document.getElementById('search').value;
    if(texting=="Resume" || texting=="")
    {
      alert("Resume");
    }
    else{alert("Wrong");}

  }
render() {
 return (
     <div>
         <div className="demo-big-content">
         <Layout>
             <Header className ="header-color" title="Niloufar Naderi" scroll >
               <Textfield
                  
                    id="search"
                    onClick={this.gettext}
                    label="Search3"
                    expandable
                    expandableIcon={"search-100"}
                />
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
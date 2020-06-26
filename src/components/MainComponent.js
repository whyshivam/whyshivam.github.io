import React, { Component } from 'react';
import Work from './WorkComponent';
import Connect from './ConnectComponent';
import Photo from './PhotoComponent';
import Video from './VideoComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch , Route, Redirect} from 'react-router-dom';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";





class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
   
  }
  render() {
    return (
      // @ts-ignore
      <ReactFullpage
        autoScrolling={true}
        scrollOverflow={true}
        slidesNavigation={true}
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        callbacks={[this.onLeave]}
        navigation={true}
        navigationToolTips={['Home','Work','About','Photo','Video','Connect']}
        showActiveTooltip={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        scrollingSpeed={700}
        
        render={({ state, fullpageApi }) => {
          return (
            
          <React.Fragment>
            <div className="fullpage-wrapper">
            <div className="section" data-anchor="home" ><Home/></div>
             <div className="section" data-anchor="work" ><Work/></div>
             <div className="section" data-anchor="about" ><About/></div>
             <div className="section" data-anchor="photo" ><Photo/></div>
             <div className="section" data-anchor="video" ><Video/></div>
             <div className="section" data-anchor="connect" ><Connect/></div>
             </div>
          </React.Fragment>
          
          );
        }}
      />
    );
  }
}


class Main extends Component{
  
  
render(){

  // exact path is exactly same address
  // path is some what same address
      return (
        <div className="container">
         <Header/>
           <FullpageWrapper/>
           
        </div>
      );
    }
}

//                <button onClick={() => fullpageApi.moveTo(1, 0)}>

export default Main;

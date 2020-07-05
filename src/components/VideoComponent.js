import React from 'react';
// @ts-ignore
import {Row,Col} from 'reactstrap';
// @ts-ignore
function Video(props) {
 return(
    <div className="container">
    <div className="row row-header">
    <div className="fib col-6"><h1 className="row-header" >Video</h1></div>
                <div className="fib col-6 page-icons" style={{textAlign:"right"}}>
                    <a className="header-icons" target="_blank" href="https://www.youtube.com/user/cineseciitr/featured">
                        <i className="fa fa-youtube-play"/>
                    </a>
                </div>
       <div className="fib col-md-7  col-sm-12"  >
          <div className="container-video fib1">
             <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/tkJWtLKRVQA" 
// @ts-ignore
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
       </div>
       <div className="fib col-md-5 col-sm-12 row" >
          <div className="fib col-md-12 col-sm-9">
             <div className="container-video fib1">
                <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/-bSsZkaXHa0" 
// @ts-ignore
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
          </div>
          <div className="fib col-md-12 col-sm-3 row">
             <div className="fib col-md-6 col-sm-12" >
                <div className="container-video fib1">
                   <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/-bLAQ1XR1l8" 
// @ts-ignore
                   frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
             </div>
             <div className="fib col-md-6 col-sm-12" >
                <div className="container-video fib1">
                   <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/KADmlsXXDSM" 
// @ts-ignore
                   frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
 );
}
export default Video;

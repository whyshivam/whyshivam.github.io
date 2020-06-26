import React from 'react';
import {Row,Col} from 'reactstrap';
function Video(props) {
 return(
     <div className="container">
         <div className="row row-header">
            <div className="fib col-12"><h1 className="row-header" >Video</h1></div>

            <div className="fib col-md-7  col-sm-12"  >
                <div className="container-video fib1">
                    <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/KADmlsXXDSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="fib col-md-5 col-sm-6" >
                <div className="fib col-12" >
                    <div className="container-video fib2">
                        <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/tkJWtLKRVQA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="fib col-md-5 col-sm-6 .d-none .d-sm-block" hidden-xs >
                <div className="fib col-12 d-none d-sm-block" >
                    <div className="container-video fib2">
                        <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/-bLAQ1XR1l8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="fib col-md-7  col-sm-12"  >
                <div className="container-video fib1">
                    <iframe className="responsive-iframe fib1" src="https://www.youtube.com/embed/-bSsZkaXHa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
     </div>
 );
}
export default Video;

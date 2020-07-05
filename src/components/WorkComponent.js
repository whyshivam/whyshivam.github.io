import React from 'react';
import {Row,Col} from 'reactstrap';
function Work(props) {
 return(
     <React.Fragment>
        <div className="xsl container">
            <div className="row row-header">
                <div className="fib col-6"><h1 className="row-header" >Work</h1></div>
                <div className="fib col-6" style={{textAlign:"right"}}>icon</div>
                
      <div className="fib col-md-7  col-sm-12"  >
         <div className="container-video fib1 pic">
         <img src="/images/work/fib1.png"/>
         </div>
      </div>
      <div className="fib col-md-5 col-sm-12 row" >
         <div className="fib col-md-12 col-sm-9">
            <div className=" container-video fib1 pic">
               <img src="/images/work/fib2.png"/>
            </div>
         </div>
         <div className="fib col-md-12 col-sm-3 row">
            <div className="fib col-md-6 col-sm-12" >
               <div className="container-video fib1 pic">
                  <img src="/images/work/fib3.png"/>
               </div>
            </div>
            <div className="fib col-md-6 col-sm-12" >
               <div className="container-video fib1 pic">
                  <img src="/images/fib3.jpg"/>
               </div>
            </div>
         </div>
      </div>
            </div>
        </div>
        
        






     </React.Fragment>
 );
}
export default Work;

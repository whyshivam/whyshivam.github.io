import React from 'react';
import {Row,Col} from 'reactstrap';
function Photo(props) {
 return(
    <div className="container">
   <div className="row row-header">
      <div className="fib col-12">
         <h1 className="row-header" >Photo</h1>
      </div>
      <div className="fib col-md-7  col-sm-12"  >
         <div className="container-video fib1">

         </div>
      </div>
      <div className="fib col-md-5 col-sm-12 row" >
         <div className="fib col-md-12 col-sm-9">
            <div className="container-video fib1">

            </div>
         </div>
         <div className="fib col-md-12 col-sm-3 row">
            <div className="fib col-md-6 col-sm-12" >
               <div className="container-video fib1">

               </div>
            </div>
            <div className="fib col-md-6 col-sm-12" >
               <div className="container-video fib1">

               </div>
            </div>
         </div>
      </div>
   </div>
</div>
 );
}
export default Photo;

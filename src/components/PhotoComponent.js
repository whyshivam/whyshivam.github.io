import React from 'react';
import {Row,Col} from 'reactstrap';
function Photo(props) {
 return(
     <div className="container">
         <div className="row row-header">
            <div className="fib col-12"><h1 className="row-header" >Photo</h1></div>
            <div className="fib col-md-7  col-sm-12"  >
                <img src="" ></img>
            </div>
            <div className="fib col-md-5 col-sm-12" >
                <div className="fib col-12" >
                I have done Photo and Photo and Photo more then rest then Photo.</div>
                <div className="fib col-md-6 col-sm-12" >
                I have done Photo and Photo and Photo more then rest then Photo.
                </div>
            </div>
            
        </div>
         
     </div>
 );
}
export default Photo;

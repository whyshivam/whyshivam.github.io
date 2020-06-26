import React from 'react'; 
import {Jumbotron} from 'reactstrap';
function Home(props) {
 return(
  <React.Fragment>
  <Jumbotron>
                  
                      <div className="row row-header">
                          <div className="fib col-12">
                              <h1 style={{fontSize:"10vw"}}>#hello<text style={{color:"#E18514"}}>&nbsp;i_am</text><br/><text style={{color:"#E18514"}}>shivam</text>Kumar;</h1>
                              <h4 style={{fontSize:"3vw"}}>Coder, Programmer, WebDeveloper, Filmographer, Guitarist</h4>
                          </div>
                          </div>
                     
              
              </Jumbotron>
  </React.Fragment>
 );
}
export default Home;

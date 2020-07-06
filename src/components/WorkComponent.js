import React from 'react';
//import { Row, Col } from 'reactstrap';
const datas = [
   {
      data:"Worked as a web developer intern for formulating interactive landing pages for Nanotech, which provides web solutions. "
   },
   {
      data:"The project is to design and program a functional model of a self-driving car. The model is based on OpenCV-Python and operated on Rasberry Pi, a webcam, and ultrasonic sensors."
   },
   {
      data:"Worked for KredX, to solve the export financing problem, after getting shortlisted in Case Challenge, E-Summit, 2020."
   },
   {
      data:"Worked as a Software Research Intern to analyze the market development strategies for technological advancement in the fields of AI."
   }
];
function Header() {
   return (
      <React.Fragment>
         <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header" >Work</h1></div>
            <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/shivam-kr-vatsa/">
                  <i className="fa fa-linkedin" />
               </a>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://github.com/whyshivam">
                  <i className="fa fa-github" />
               </a>
            </div>
         </div>
      </React.Fragment>
   );
}
function Header1() {
   return (
      <React.Fragment>
         <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header-slide" >Nanotech</h1></div>
            <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://nspl.co.in">
                  <i className="fa fa-external-link" />
               </a>
               <a className="header-icons" href="#work">
                  <i className="fa fa-chevron-left" />
               </a>
            </div>
         </div>
      </React.Fragment>
   );
}
function Header2() {
   return (
      <React.Fragment>
         <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header-slide" >ArIES</h1></div>
            <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ariesiitr">
                  <i className="fa fa-facebook" />
               </a>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://github.com/whyshivam/python-selfDriving">
                  <i className="fa fa-github" />
               </a>
               <a className="header-icons" href="#work">
                  <i className="fa fa-chevron-left" />
               </a>
            </div>
         </div>
      </React.Fragment>
   );
}
function Header3() {
   return (
      <React.Fragment>
         <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header-slide" >KredX</h1></div>
            <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://www.esummit.in/">
                  <i className="fa fa-external-link" />
               </a>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://www.kredx.com/">
                  <i className="fa fa-external-link" />
               </a>
               <a className="header-icons" href="#work">
                  <i className="fa fa-chevron-left" />
               </a>
            </div>
         </div>
      </React.Fragment>
   );
}
function Header4() {
   return (
      <React.Fragment>
         <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header-slide" >IIBM</h1></div>
            <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
               <a className="header-icons" rel="noopener noreferrer" target="_blank" href="http://www.iibm.in/">
                  <i className="fa fa-external-link" />
               </a>
               <a className="header-icons" href="#work">
                  <i className="fa fa-chevron-left" />
               </a>
            </div>
         </div>
      </React.Fragment>
   );
}




function SlideData1() {
   
   return (
      <div className="fib col-12 row ">
         <div className="fib col-md-7  col-sm-12"  >
            <div className="container-video fib1 pic">
               <a href="#work/slide1"><img alt="pic" src="/images/work/fib1.png" /></a>
            </div>
         </div>
         <div className="fib col-md-5 col-sm-12 row" >
            <div className="fib col-md-12 col-sm-9">
               <div className=" container-video fib1 pic">
                  <a href='#work/slide2'><img alt="pic" src="/images/work/fib2.png" /></a>
               </div>
            </div>
            <div className="fib col-md-12 col-sm-3 row">
               <div className="fib col-md-6 col-sm-12" >
                  <div className="container-video fib1 pic">
                     <a href="#work/slide3"><img alt="pic" src="/images/work/fib3.png" /></a>
                  </div>
               </div>
               <div className="fib col-md-6 col-sm-12" >
                  <div className="container-video fib1 pic">
                     <a href="#work/slide4"><img alt="pic" src="/images/work/fib4.png" /></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function SlideData(index) {
   const i = parseInt(index.index);
   const url = "/images/work/fib" + i + ".png";
   const data = datas[i-1].data;
   return (
      <div className="fib col-12 row" >
         <div className="fib col-md-7  col-sm-12"  >
            <div className="container-video fib1 pi">
               <img alt="pic" src={url} />
            </div>
         </div>
         <div className="fib col-md-5 col-sm-12">
            <div className="fib slide-content page">
            <p  className="middle slide-content page" >
               {data}
            </p>
            </div>
         </div>
      </div>
   );
}

function Work(props) {
   return(
      <div className="container work">
         <div className="row row-header slide">
            <div className="container page">
               <Header/>
               <SlideData1 />
            </div>
         </div>
         <div className="row row-header slide">
            <div className="container page">
               <Header1/>
               <SlideData index={1} />
            </div>
         </div>
         <div className="row row-header slide">
            <div className="container page">
               <Header2/>
               <SlideData index={2}/>
            </div>
         </div>
         <div className="row row-header slide">
            <div className="container page">
               <Header3/>
               <SlideData index={3}/>
            </div>
         </div>
         <div className="row row-header slide">
            <div className="container page">
               <Header4/>
               <SlideData index={4}/>
            </div>
         </div>
      </div>
   );
}

export default Work;

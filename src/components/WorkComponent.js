import React from 'react';
import { Row, Col } from 'reactstrap';
const datas = [
   "Worked as a web development intern for this budding MSME"
   ,

   "Completed the project in field of seld driving car"
   ,
   "Did Good Work here"
   ,
   "Awesome jobs here are done with great intentions. Highly appreciated in this regards"
];
function Header() {
   return (
      <React.Fragment>
         <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header" >Work</h1></div>
            <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
               <a className="header-icons" target="_blank" href="https://linkedin.com/in/shivam-kr-vatsa/">
                  <i className="fa fa-linkedin" />
               </a>
               <a className="header-icons" target="_blank" href="https://github.com/whyshivam">
                  <i className="fa fa-github" />
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
               <a href="#work/slide1"><img src="/images/work/fib1.png" /></a>
            </div>
         </div>
         <div className="fib col-md-5 col-sm-12 row" >
            <div className="fib col-md-12 col-sm-9">
               <div className=" container-video fib1 pic">
                  <a href='#work/slide2'><img src="/images/work/fib2.png" /></a>
               </div>
            </div>
            <div className="fib col-md-12 col-sm-3 row">
               <div className="fib col-md-6 col-sm-12" >
                  <div className="container-video fib1 pic">
                     <a href="#work/slide3"><img src="/images/work/fib3.png" /></a>
                  </div>
               </div>
               <div className="fib col-md-6 col-sm-12" >
                  <div className="container-video fib1 pic">
                     <a href="#work/slide4"><img src="/images/work/fib4.png" /></a>
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
   const data = datas[i - 1];
   return (
      <div className="fib col-12 row" >
         <div className="fib col-md-7  col-sm-12"  >
            <div className="container-video fib1 pi">
               <img src={url} />
            </div>
         </div>
         <div className="fib col-md-5 col-sm-12">
            <p className="slide-content page">
               {data}
            </p>
         </div>
      </div>
   );
}

function Work(props) {
   return (
      <div className="container page">
         <div className="row row-header slide" >
            <Header></Header>
            <SlideData1 />
         </div>
         <div className="row row-header slide" data-anchor='slide1'>
            <Header />
            <SlideData index="1" />
         </div>
         <div className="row row-header slide" data-anchor='slide2'>
            <Header />
            <SlideData index="2" />
         </div>
         <div className="row row-header slide" data-anchor='slide3'>
            <Header />
            <SlideData index="3" />
         </div>
         <div className="row row-header slide" data-anchor='slide4'>
            <Header />
            <SlideData index="4" />
         </div>
      </div>

   );
}

export default Work;

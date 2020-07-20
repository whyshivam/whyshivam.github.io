import React from 'react';
//import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
//import { Link } from 'react-router-dom';
function Connect(props) {
    return (
        <React.Fragment>
            <div className="container page">
                <div className="row row-header">
                    <div className="fib col-6"><h1 className="row-header" >Connect</h1></div>
                    <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
                        <a className="header-icons" href="#home">
                            <i className="fa fa-chevron-up" />
                        </a>
                    </div>
                    <div className="fib col-12"  >
                        <p className="Contact">
                            You can find me here. These are my wherebouts. LOL
                    </p>
                    </div>
                    <div className="fib col-12 row">
                        <div className="fib connect-icons col-md-6 col-sm-12 ">
                            <a className="connect-icons row col-12 phone" rel="noopener noreferrer" target="_blank" href="tel:+917070808915">
                                <div className="col-1 connect-icons-content"> <i className="fa fa-phone" /></div><div className="col-11 connect-icons-content">+91 7070 80 8915</div>
                            </a>
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shivamkr.vatsa@gmail.com">
                                <div className="col-1 connect-icons-content"> <i className="fa fa-envelope" /></div><div className="col-11 connect-icons-content">shivamkr.vatsa@gmail.com</div>
                            </a>
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/shivam-kr-vatsa/">
                                <div className="col-1 connect-icons-content"><i className="fa fa-linkedin" /></div><div className="col-11 connect-icons-content"> LinkedIn</div>
                            </a>
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://github.com/whyshivam">
                                <div className="col-1 connect-icons-content"> <i className="fa fa-github" /></div><div className="col-11 connect-icons-content"> GitHub</div>
                            </a>
                        </div>

                        <div className="fib connect-icons col-md-6 col-sm-12">
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://instagram.com/whyshivam">
                                <div className="col-1 connect-icons-content"> <i className="fa fa-instagram" /></div><div className="col-11 connect-icons-content"> Instagram</div>

                            </a>
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/whyshivam">

                                <div className="col-1 connect-icons-content"> <i className="fa fa-twitter" /></div><div className="col-11 connect-icons-content"> Twitter</div>
                            </a>
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://www.flickr.com/photos/188692070@N04/">

                                <div className="col-1 connect-icons-content"> <i className="fa fa-flickr" /></div><div className="col-11 connect-icons-content"> Flickr</div>
                            </a>
                            <a className="connect-icons row col-12" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/draet10">
                                <div className="col-1 connect-icons-content"> <i className="fa fa-facebook" /></div><div className="col-11 connect-icons-content"> Facebook</div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row row-footer">
                <div className="footer-note">
                    <p style={{ fontSize: "1.2em" }}>
                        <a href="#video" >
                            Like Suprises?
                            <i className="fa fa-chevron-down" /> </a>
                    </p>
                    <p>&copy;2020. Made with <i className="fa fa-heart"></i> by Shivam. Yeah thats me!!</p>
                </div>
            </div>
        </React.Fragment>


    );
}

export default Connect;
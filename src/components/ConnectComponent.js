import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
function Connect(props) {
    return (
        <div className="container">
            <div className="row row-header">
            <div className="fib col-6"><h1 className="row-header" >Contact</h1></div>
                <div className="fib col-6 page-icons" style={{textAlign:"right"}}>
                    <a className="header-icons" href="#home">
                        <i className="fa fa-chevron-up"/>
                    </a>
                </div>
                <div className="fib col-12"  >
                    <p className="Contact">
                        You can contact me here.
                    </p>
                </div>
                <div className="fib col-12 row">
                    <div className="fib connect-icons col-md-6 col-sm-12">
                        <a className="connect-icons phone" target="_blank" href="tel:+917070808915">
                            <i className="fa fa-phone" /> &#9; +91 7070 80 8915
                        </a><br />
                            <a className="connect-icons" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shivamkr.vatsa@gmail.com">
                                <i className="fa fa-envelope" /> &#9; shivamkr.vatsa@gmail.com
                        </a><br />
                            <a className="connect-icons" target="_blank" href="https://linkedin.com/in/shivam-kr-vatsa/">
                                <i className="fa fa-linkedin" /> &#9; LinkedIn
                        </a><br />
                            <a className="connect-icons" target="_blank" href="https://github.com/whyshivam">
                                <i className="fa fa-github" />&#9; GitHub
                        </a><br />
                    </div>
                    <div className="fib connect-icons col-md-6 col-sm-12">
                        <a className="connect-icons" target="_blank" href="https://instagram.com/whyshivam">
                            <i className="fa fa-instagram" />&#9; Instagram
                        </a><br />
                            <a className="connect-icons" target="_blank" href="https://www.twitter.com/whyshivam">
                                <i className="fa fa-twitter" />&#9; Twitter
                        </a><br />
                            <a className="connect-icons" target="_blank" href="https://www.flickr.com/photos/188692070@N04/">
                                <i className="fa fa-flickr" />&#9; Flickr
                        </a><br />
                        <a className="connect-icons" target="_blank" href="https://www.facebook.com/draet10">
                                <i className="fa fa-facebook" />&#9; Facebook
                        </a><br />
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Connect;
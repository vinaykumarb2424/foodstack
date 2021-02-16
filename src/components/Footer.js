import React from 'react';
import {Link} from 'react-router-dom';
const Footer =(props) => {
    return(
        <footer className="bg-info text-white  mt-5 mb-auto ">
            <div className="container ">
                <div className="container-fluid">
                      <div className="row">
                             <div className="col-lg-4 col-md-4 col-sm-6">
                                  <h6>Our Services</h6>
                                  <ul className="list-unstyled text-warnin">
                                      <li><Link to="/currency-converter" className="text-warning text-decoration-none">Currency Converter</Link></li>
                                      
                                 </ul>
                             </div>
                             <div className="col-lg-4 col-md-4 col-sm-6">
                                   <h6>About Us</h6>
                             </div>
                             <div className="col-lg-4 col-md-4 col-sm-6">
                                  <h6>Contact Us</h6>
                             </div>
                    </div>
                </div>
            </div>
            <hr className="bg-danger "/>
            <div className="container ">
                <div className="container-fluid">
                       <div className="row mw-100">
                            <div className="col">
                                <p className="text-center">Copyrights &copy;{new Date().getFullYear()} All rights reserved |
                                    Terms of service | Privacy
                               </p>
                           </div>
                       </div>
                       <div className="row mw-100">
                           <div className="col">
                               <div className="d-flex justify-content-center">
                                      <a className="navbar-brand text-white " href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i> </a>
                                      <a className="navbar-brand text-white " href="https://twitter.com/?lang=en" target="_blank"><i className="fab fa-twitter "></i></a>
                                      <a className="navbar-brand text-white " href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                                      <a className="navbar-brand text-white " href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                         </div>
                </div>
                </div>
          </div>
            
         </footer>
    )
}
export default Footer;
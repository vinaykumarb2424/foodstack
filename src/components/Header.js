import React from 'react';
import {Link} from 'react-router-dom';


const Header =(props) => {
    return(
        <nav>
            <div className="navbar navbar-expand-md navbar-primary bg-primary fixed-top">
              <div className="container-fluid">
                 <div className="navbar-header">
                     <div className="row">
                         <div className="col-sm-12">
                         <Link className="navbar-brand text-white" to="/home">Foodstack </ Link>
                            
                             
                             <button type="button" style={{float:'right'}} className="navbar-toggler ml-xs-auto" data-toggle="collapse" data-target="#close">
                                          <i className="fa fa-bars" aria-hidden="true"></i>                     
                               </button>
                               
                         </div>
                      </div>
                </div>
                     <div className="collapse navbar-collapse" id="close">
                          <ul className="navbar-nav ml-auto mr-5">
                              
                              <button type="button" className="btn btn-primary text-warning mr-3">
                                          <i className="fa fa-sign-in" aria-hidden="true"></i> Login                     
                               </button>
                                <button type="button"  className="btn btn-primary text-warning mr-3" href="/" data-target="#signup"
                                data-toggle="modal"><i className="fa fa-user-plus" aria-hidden="true"></i> Signup</button>
                            
                          </ul>
                    </div>
             </div>
          </div>
      </nav>
    )
}

export default Header;
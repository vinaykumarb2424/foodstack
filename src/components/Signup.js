import React from 'react';
import TextField from '@material-ui/core/TextField';

const Signup =(props) =>{
    return(
        
        // container starts
        <div className="container">
             {/* container-fluid starts */}
             <div className="container-fluid">
                 {/* Modal starts */}
                 <div className="modal fade" id="signup">
                    
                    <div className="modal-dialog"> 

                         <div className="modal-content">
                            {/* modal header starts*/}
                            <div className="modal-header">
                                 <h4 className="modal-title">Signup</h4>
                                 <button type="button" class="close" data-dismiss="modal">&times;</button>
                            
                            </div>
                            {/* modal header ends*/}
                            {/* modal body ends*/}
                            <div className="modal-body"> 

                              <div className="signupform">
                                  <div className="container">
                                    <div className="form-group">
                                        

                                        <center>

                                        
                                        <div className="row ">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                                            <TextField id="standard-basic" label="Fullname" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12">
                                            <TextField id="standard-basic" label="Mobile" />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                                            <TextField id="standard-basic" label="Email" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <TextField id="standard-basic" type="password"  label="Password" />
                                            </div>

                                        </div>
                                        <div className="text-center">
                                        <button type="button" className="btn btn-info btn-block mt-5"> 
                                                Create Account
                                        </button>
                                        </div>
                                        </center>
                                        
                                        
                                        
                                    
                                    
                                    </div>
                                  </div>

                              </div>

                            </div>
                            {/* modal body ends*/}

                         </div>

                    </div>

                 </div>
                 {/* Modal ends */}
             </div>
             {/* container-fluid ends */}

        </div>
        // container ends
    )
}
export default Signup;
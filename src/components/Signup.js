import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import { Component } from 'react';


const url ="http://localhost:6700/users";

class  Signup extends Component{

    constructor(props){
        super(props)


        this.state={
            userName:'',
            userImg:''
        }
    }
    conditionalButton =() =>{
        console.log(sessionStorage.getItem('username'))
        console.log(">>this,state",this.state)

        if((sessionStorage.getItem('username') ==null)||  (sessionStorage.getItem('username') ==undefined)){
          return(
            <a href='https://github.com/login/oauth/authorize?client_id=5f2917ad2616b72c387f'>Login With Github</a>

          )
        }
        else{
            return(
                <div>
                     <img src={this.state.userImg} style={{height:100,width:100}}/>
                    Hi {this.state.userName}
                </div>
            )
        }
    }
    render(){
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
                                        {this.conditionalButton()}
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
componentDidMount(){
    const code = (this.props.location.search).split('=')[1];
    if(code){
        let requestData={
            code:code
        }
        console.log("requestData>>>",requestData)
        fetch(url, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(requestData)
    })
    .then((res) => res.json())
    .then((data) => {
        var user = data.login;
        var img = data.avatar_url;
        sessionStorage.setItem('username',user)
        fetch(url,{method:'GET'})
                .then((res) => res.json())
                .then((data)=> this.setState({userName:user,imgUrl:img}))
    
            })
    }
    
}
}
export default withRouter(Signup);
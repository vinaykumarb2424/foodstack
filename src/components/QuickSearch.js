import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';




const QuickSearch = (props) =>{


  
   
   const renderList = ({quickData}) => {
    if(quickData){
      if(quickData.length>0){
          return quickData.map((item) => {
            
              return(
                // <div className="card mt-2"> 
                //    <div className="card-block">
                //    <div className="row">
                //   <div className="col-xl-4 col-lg-4 col-md-8 col-sm-4 col-4">
                //   <img className="img-fluid" src={item.img} alt="{item.img}"></img>

                //    </div>
                //    <div className="col-xl-8 col-lg-8 col-md-4 col-sm-8 col-8">
                //      <div className="card-title">
                //        <h3>{item.name}</h3>
                //      </div>
                //      <div className="card-text">Start your day with exclusive {item.name} Options</div>
                //    </div>

                //     </div>
                //    </div>
                // </div>
                <Link to={`/listing/${item._id}`}>
                  <div className="card mt-3 mr-3 flex "> 
                   <div className="card-block" >
                      <img className="card-img-top  rounded" style={{height:'250px',width:'100%'}} src={item.img} alt={item.img}></img>
                    </div>
                     <div className="card-title text-center">
                       <h3>{item.name}</h3>
                     </div>
                     <div className="mt-5 card-text  text-dark text-center">Start your day with exclusive {item.name} Options
                     </div>
                     

                   
                </div>
                </Link>
                  
              )
          })
      }else{
        return(
          <div className="align-items-center ">
              
              <center>
     
              <h2>No Data On This Filter</h2>
              </center>
                 
          </div>
         
        )
      }
    }else{
      return(
        
            <div className="spinner-border text-dark p-4 " style={{marginTop:'20%', marginLeft:'50%'}}></div>

      )
    }
  }
   
   
   return(
        <div className="container mt-5">
          <div className="container-fluid">
              
                    <div className="heading">
                       <h3 className="text-dark">Quick Search</h3>
                       <span>Discover restaurants by type of meal</span>
                    </div>
                    <div className="card-columns">
                     {renderList(props)}
                    </div>
                             
           </div>
           
       </div>
             
        
             
    )
   

}

export default QuickSearch;
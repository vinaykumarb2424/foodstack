import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';





const Listing = (props) =>{
  const renderList =({restaurantList}) =>{
    console.log(renderList)
    if(restaurantList){
      if(restaurantList.length>0){
        return restaurantList.map((item) =>{
          return(
            <Link to={`/details/${item._id}`} className="text-decoration-none">
            <div className="row mr-5">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
            </div> 
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 mt-4">
                 <div className="card">
                      <div className="row">
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                              <img className="img-fluid img" src={item.thumb} alt="{item.thumb}"></img>

                          </div>
                          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8">
                            <div clas="card-body">
                                   <h4 className="card-title mt-3">{item.name}</h4>
                                   <p>Rs.{item.cost} Per Two</p>
                                    <p>{item.city_name}</p>
                                   </div>
                          </div>

                      </div>

                  </div>
              </div>
           </div>
           </Link> 

          )
        }) 
      }else{
            return(
              <div>
                  <center>
                    <h2>No Data On This Filter</h2>
                </center>
              </div>
        )
    }
   } else{
        return(
            <div>
              
            </div>
        )
   }
    


    
  }
    return(
       
       <div className="container">
           {renderList(props)}
      </div>
                          

    )
}
export default  Listing ;
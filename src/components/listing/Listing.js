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
           
                 <div className="card mb-5">
                      <div className="row">
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                              <img className="img-flui  rounded" style={{height:'250px',width:'250%'}} src={item.thumb} alt={item.thumb}></img>

                          </div>
                          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 text-center pl-5">
                            <div className="card-body">
                                 <div className="card-title mt-0 text-center">
                                   <h4 className="">{item.name}</h4>
                                   
                                   
                                 </div>
                                 <div>
                                 <hr />
                                 </div>
                                 
                              
                                   
                                  
                                   <span className="card-title mt-3 ">Rs.{item.cost} Per Two</span>
                                  <p className="card-title ">{item.city_name}</p>
                            </div>
                            {/* <div class="card-footer"></div>5f2917ad2616b72c387f  e73f9308190310e31b9778b5b1c5d4f51ac284b3 */}
                                  
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
                    <h2>No restaurants found</h2>
                </center>
              </div>
        )
    }
   } else{
        return(
            <div>
                          <div className="spinner-border text-dark p-4" style={{marginTop:'20%', marginLeft:'50%'}}></div>

            </div>
        )
   }
    


    
  }
    return(

               <div>
                  {renderList(props)}      
              </div>
    )
}
export default  Listing ;
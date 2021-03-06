import React from 'react';
import Header from '../Header';
import Signup from '../Signup';
import Footer from '../Footer';

const ViewOrders = (props) => {
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                /*if(useranem==item.name){*/
                    return(
                        
                    
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.rest_id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                        </tr>
                    )    
                /*}*/
                
            })
        }
    }

    return(
        <div className="page-container">
                   <div className="content-wrap">
                      <Header />
                      <div className="body pt-5">
                      <div className="container mt-2 pt-5">
                         <div className="container-fluid">
                            {/* <div className="card">
                               <div className="card-header text-center bg-secondary text-white">Orders List</div>
                                <div className="card-body"> */}
                                <table class="table table-dak table-hover">
                                    <thead className="thead-dark">
                                       <tr className="pl-">
                                            <th>OrderId</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Address</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>Doe</td>
                                        <td>8897399952</td>
                                       
                                        
                                       </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>Moe</td>
        
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>Moe</td>
       
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>Moe</td>
       
      </tr>
    </tbody>
  </table>
  <ul class="pagination float-right">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
                                </div>
                 
                     
              </div>
                
     </div>
                        
                    {/* </div>
                      </div> */}
                   </div>
                   <div className="footer">
                       <Footer />
                   </div>
        </div>
        // <div className="container">
        //     <center><h3>Booking List</h3></center>
        //     <table className="table table-responsive">
        //         <thead>
        //             <tr>
        //                 <th>OrderId</th>
        //                 <th>Rest</th>
        //                 <th>Name</th>
        //                 <th>Phone</th>
        //                 <th>Address</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {renderTable(props)}
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default ViewOrders;
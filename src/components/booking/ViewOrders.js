import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ViewOrders = (props) => {
    const renderTable = ({orders}) => {
     
        if(orders){
            return orders.map((item) => {
                /*if(useranem==item.name){*/
                    return(
                        
                    
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.hotel_name}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                          
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
                                <table className="table table-dak table-hover">
                                    <thead className="thead-dark">
                                       <tr className="pl-">
                                            <th>Order Id</th>
                                            <th>Restaurant</th>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                       
       {renderTable(props)}
    </tbody>
  </table>
  <ul className="pagination float-right">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
                                </div>
                 
                     
              </div>
                
     </div>
                        
                    
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
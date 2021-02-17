import { Component } from "react"
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Signup from '../Signup';
import CurrencyConverter from '../Currencyconverter/CurrencyConverterApi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
const url="https://api-foodstack.herokuapp.com/restaurant";
class HotelDetails extends Component {
    constructor (){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state;
        return(
            <div className="page-container">
               <div className="content-wrap">
                   <Header />
                   <div className="body pt-5">
                    
                    <Signup />
                    <div className="container mt-5">
                      <div className="container-fluid">
                   <div class="card mt-5">
                      <div className="card-block" >
                          <img className="card-img-top"  style={{height:'350px',width:'100%'}} src={details.thumb} alt={details.thumb}></img>
                      </div>
                      <div class="card-body">
                         <h4>{details.name}</h4>
                         <span>{details.locality} {details.city_name}</span>
                         <Tabs>
                         <TabList>
                                <Tab>OverView</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Order Online</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>About This Place</h2>
                                <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>Contact Us</h2>
                                <h3>{details.address}</h3>
                                <h3>Phone: 9655868686</h3>
                            </TabPanel>
                         </Tabs>
                     </div>
                  </div>
              </div>
            </div>
                   </div>
               </div>
               <div className="footer">
                  <Footer />
               </div>
          </div>





           
        )
          
        
        
    }


    componentDidMount(){

        const hotelId= this.props.match.params.id;
        axios.get(`${url}/${hotelId}`)
    .then((res) => {this.setState({details:res.data[0]})})

    }
}
export default HotelDetails;
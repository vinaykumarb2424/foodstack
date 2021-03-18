
import './Home.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import QuickSearchApi from './components/QuickSearchApi';
import Signup from './components/Signup';

const Home=(props) =>{
  return (

   
     <div className="page-container">
           
       <div className="content-wrap">
           <Header />
            <div className="body pt-0">
               <Search />
               <QuickSearchApi />
               
              
               <Signup />
            </div>
       </div>
       <div className="footer">
                    <Footer />
             </div>
      
      
     </div>
  );
}

export default Home;

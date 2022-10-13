import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbaar/Navbar';
import Home from './components/Home/Home';
import {Routes,Route} from "react-router-dom";
import FAQs from './components/FAQs/FAQs';
import Login from './components/Login/Login';
import ContactUs from './components/Contact Us/ContactUs';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/faqs" element={<FAQs/>} />
       <Route path="/contactus" element={<ContactUs/>} />
       <Route path="/login" element={<Login/>} />
      
 
       
      </Routes>
       
    </div>
  );
}

export default App;

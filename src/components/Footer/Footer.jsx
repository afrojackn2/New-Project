import React from 'react'
import "./Footer.css";
import flogo from "../../components/Images/Footer/Afroj-Logo.png"
import fb from "../../components/Images/Footer/fb.png";
import tw from "../../components/Images/Footer/tw.png";
import insta from "../../components/Images/Footer/insta.png";
import {Link} from "react-router-dom";



function Footer() {
    return (
        <div className="_footer">
            <div className="_f1">
                <img src={flogo} alt="" />
            </div>
            <div className="g_f2">
                <h2>Contact Info</h2>
                <div className='f-line'></div>
                <div className="email">Email: <a href="afroja1415@gmail.com">afroja1415@gmail.com</a></div>
                <div className="email">Whatsapp:<a href="+917985743457">+917985743457</a></div>
                <div className="add">Mon-Fri: 9am to 5pm EST</div>
                <div className="social">
                    <img src={fb} alt="" />
                    <img src={tw} alt="" />
                    <img src={insta} alt="" />
                </div>


            </div>
            <div className="g_f2">
                <h2>Our services</h2>
                <div className='f-line'></div>
                <div className="f_service"><a href="">Afroj Notes</a></div>
                 <div className="f_service"><a href="">Afroj Notes</a></div>
                 <div className="f_service"><a href="">Afroj Notes</a></div>
                 <div className="f_service"><a href="">Settlement Services</a></div>
            </div>
            <div className="g_f2">
                <h2>Important Links</h2>
                <div className='f-line'></div>
                <div className="f_service"><a href="">Terms & Conditions</a></div>
                 <div className="f_service"><a href="">Privacy Policy</a></div>
                 <div className="f_service"><a href="">Refund Policy</a></div>
                 <div className="f_service"><Link to="/partner">Partner with us</Link></div>
                 
            </div>
            <p className='copy'>Copyright@2022</p>
        </div>
        


    )
}

export default Footer
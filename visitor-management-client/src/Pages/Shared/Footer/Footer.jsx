import React from "react";
import logo from "./../../../assets/logo 2.png";

const Footer = () => {
  return (
      <div className="grid sm:grid-cols-2 md:grid-cols-2 content-start lg:grid-cols-2 mx-auto gap-8 justify-center  bg-gradient-to-r from-black via-blue-950 to-purple-950 text-[#dcc63b] p-10 ">
        
        {/* Logo and description */}
        <div className="col-span-2 justify-self-start md:ml-5 ml-0 lg:col-span-1">
              <img className="mx-auto" src={logo} width="200" height="200" alt="Logo" />
            <div className="text-center ">
            <p>Sky Dream Providing reliable services since 2009</p>
              <p>
                All rights reserved by Sky Dream ©2024
              </p>
            </div>
        </div>

        {/* Links section (Services, Company, Legal, Social Media) */}
        <div className="grid grid-cols-2  lg:grid-cols-4  content-center gap-16 md:gap-0">
          
          {/* Services */}
          <div className="grid ">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Work Permit Visa</a>
            <a className="link link-hover">Students Visa</a>
            <a className="link link-hover">Visit Visa</a>
            <a className="link link-hover">Business Visa</a>
          </div>

          {/* Company */}
          <div className="grid ">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
            <a className="link link-hover">Press kit</a>
          </div>

          {/* Legal */}
          <div className="grid ">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>

          {/* Social Media */}
          <div className="grid ">
            <h6 className="footer-title">Social Media</h6>
            
              <a className="link link-hover">Facebook</a>
              <a className="link link-hover">Instagram</a>
              <a className="link link-hover">WhatsApp</a>
              <a className="link link-hover">Linkedin</a>
            
          </div>
        </div>
      </div>
   
  );
};

export default Footer;

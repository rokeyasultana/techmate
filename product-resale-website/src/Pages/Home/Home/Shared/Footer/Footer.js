import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
          <footer  id='footerBg' class="footer p-10  text-white">
  <div>
    <span class="footer-title">Services</span> 
 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span class="footer-title">Payment Method</span> 

    <div className='flex gap-3'>
       
        <div>
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp" alt="" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp" alt="" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp" alt="" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png.webp" alt="" />
        </div>
      </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
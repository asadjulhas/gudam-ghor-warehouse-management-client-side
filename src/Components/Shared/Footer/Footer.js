import React from 'react';
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <section id="contract" className="footer_area">
   <div className="container">
    <div className="footer_bottom">
     <div className="row">
      <div className="col-md-4 col-sm-6">
       <div className="single_widget">
         <h3>Gudam Ghor</h3>
         <p>House # 43, Road # 140, Block<br/>Gulshan-01, Dhaka, Bangladesh <br/>
           info@yourdonaim.com <br/> 
           +880 172 44 11 565 <br/>
           +(235) 472 9087
         </p>
       </div>
      </div> 
      <div className="col-md-4 col-sm-6">
       <div className="single_widget">
         <h3>Important Link</h3>
           <ul>
             <li><a href="#">&gt;  Privicy &amp; Policy</a></li>
             <li><a href="#">&gt;  Terms &amp; Condition</a></li>
             <li><a href="#">&gt;  Condition &amp; Terms</a></li>
             <li><a href="#">&gt;  Privicy &amp; Policy</a></li>
             <li><a href="#">&gt;  Condition &amp; Terms</a></li>
           </ul>
          
         </div>
        </div>
        <div className="col-md-4 col-sm-12">
         <div className="contactus_area">
           <h3>Quick Contact us</h3>
           <form id="main-contact-form" name="contact-form">
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Email Address" required="required"/>
            </div>
            <div className="form-group message_area">
              <textarea name="message" id="message" className="form-control" rows="2" placeholder="Message" required="required"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="submit_btn">Send it Now</button>
            </div>
           </form>
          </div>
         </div>
        </div>
       </div>
      </div> 
     </section>
     <div className="copyright_section">
      <div className="container">
       <div className="copyright_area">
        <div className="row">
         <div className="col-md-5 col-sm-12">
          <div className="copyright_text">
            <p>Copyright © {currentYear}  | All Right Reserved</p> 
          </div>
         </div>
         <div className="col-md-7">
          <div className="footer_menu">
           <nav>
            <ul>
             <li className="smooth-menu"><a href="#top_home">Home</a></li>
             <li className="smooth-menu"><a href="#feature">Service</a></li>
             <li className="smooth-menu"><a href="#portfolio">Portfolio</a></li>
             <li className="smooth-menu"><a href="#blog">Blog</a></li>
             <li className="smooth-menu"><a href="#contract">Contract</a></li>
            </ul>
           </nav>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  );
};

export default Footer;
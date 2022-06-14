import React from "react";
import './CSS/Contact.css';
import './CSS/Form.css';
import 'font-awesome/css/font-awesome.min.css';

function Contact() {


  return (

    <div class="content">
    <div class="container">
      <div class="row">
        <div className = 'contact_info' class="col-md-5 mr-auto">
          <h1 id = "heading1" >Contact Us</h1>
          <p class="mb-5">We at Ripik are always eager to hear from you and answer your queries. You can reach to us now via: </p>

          <ul class="list-unstyled">
            <li class="d-flex mb-5">
              <div class="mr-3">
                <i className='fa fa-map-marker'/>
              </div> 
                Ripik Technology Private Limited 
                <br/> 
                4th & 5th floor, DLF phase-5, 
                <br/>
                Sector-43, Golf course road 
                <br/> 
                Gurugram, Haryana, India-122002
            </li>
            <li class="d-flex mb-5">
            <br/><br/><br/><br/>
              <div class="mr-3">
                <i className='fa fa-envelope'/>
              </div> 
                hello@ripik.ai
            </li>
          </ul>
        </div>

        <div className='email_form' class="col-md-6">
          <form class="mb-5" method="post" id="contactForm" name="contactForm">
            <div class="row">
              
              <div class="col-md-12 form-group">
                <label for="name" class="col-form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name"/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="email" class="col-form-label">Email</label>
                <input type="text" class="form-control" name="email" id="email"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 form-group">
                <label for="message" class="col-form-label">Message</label>
                <textarea class="form-control" name="message" id="message" cols="30" rows="7"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="submit" value="Send Message" id = "submit-btn" class="btn btn-primary rounded-0 py-2 px-4"/>
                <span class="submitting"></span>
              </div>
            </div>
          </form>

        </div>
      </div>
      </div>
      </div>


  );
}

export default Contact;
import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import "./contact.css"

function Contact() {
  return (
    <div>
      <Navbar contactactive=" bg-warning rounded-3"/>
      <div className="music-heading">
            <div class="bg-dark text-secondary px-4 py-5 text-center">
              <div class="py-5">
                <h1 class="display-5 fw-bold text-white">Contact Us </h1>
                <div class="col-lg-6 mx-auto">
                  <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    {/* <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Explore</button>
                    <button type="button" class="btn btn-outline-light btn-lg px-4">Book Now</button> */}
                  </div>
                </div>
              </div>
            </div>      
        </div>

        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="/img/contact.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Contact Us</h1>
              <hr/>
              <h5 className='text-danger'>Phone No: </h5> <h6> <span>+91 9871766546</span></h6>
              <h5 className='text-danger'>Email ID: </h5> <h6> <span>Balbir.iitbombay3602@gmail.com</span></h6>
              <h5 className='text-danger'>Address:</h5> <h6> <span>100, Hostel-3, IIT Bombay Powai, <br/> Mumbai Maharastra-40076</span></h6>
            </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default Contact;
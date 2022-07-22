import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import './home.css'


 const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have subscribed successfully!!!!")
  }


function Home(props) {
  return (
  <div>
    <Navbar className="Navbar" homeactive=" bg-warning rounded-3"/>

    <div class="bg-dark text-secondary px-4 pb-5 pt-0 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Inventory Portal</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Login</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Register</button>
        </div>
      </div>
    </div>
  </div>

    <div className="testinomial container mt-5">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
      

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4" >
          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
            <div className="stars text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">great service</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta ducimus nemo repudiandae expedita rerum laborum magnam velit aspernatur possimus, laboriosam esse autem! Aspernatur quod modi saepe, a molestiae aliquam.</p>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <div className='d-flex'>
                  <img src="https://i.ibb.co/DCj8gZW/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg" alt="Bootstrap" height="50" class="rounded-circle border border-white"/>
                  <div className='px-3'>
                    <h4 className="name">Dhruv Sorathiya</h4>
                    <p className='pos'>Controls Engineer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

       <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4" >
          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
            <div className="stars text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">good experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta ducimus nemo repudiandae expedita rerum laborum magnam velit aspernatur possimus, laboriosam esse autem! Aspernatur quod modi saepe, a molestiae aliquam.</p>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <div className='d-flex'>
                  <img src="https://i.ibb.co/DCj8gZW/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg" alt="Bootstrap" height="50" class="rounded-circle border border-white"/>
                  <div className='px-3'>
                    <h4 className="name">Balbir Yadav</h4>
                    <p className='pos'>Controls Engineer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

       <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4" >
          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
            <div className="stars text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">Amazing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta ducimus nemo repudiandae expedita rerum laborum magnam velit aspernatur possimus, laboriosam esse autem! Aspernatur quod modi saepe, a molestiae aliquam.</p>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <div className='d-flex'>
                  <img src="https://i.ibb.co/DCj8gZW/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg" alt="Bootstrap" height="50" class="rounded-circle border border-white"/>
                  <div className='px-3'>
                    <h4 className="name">Dhruv Sorathiya</h4>
                    <p className='pos'>Controls Engineer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>


    

    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">For Latest Update! Subscribe here</h1>
        <p class="col-lg-10 fs-4">Want to get latest update on new inventory? Subscribe here by filling your basic details. You will get latest report on new inventories, availability report, blogs and many more things. So what are you waiting for? Subscribe now.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form autoComplete="off" onSubmit={handleSubmit} class="p-4 p-md-5 border  rounded-3 bg-dark">

          <div class="form-floating mb-3">
            <input type="text" autoComplete='false' class="form-control" placeholder="John Nicks"/>
            <label for="floatingInput">Full Name</label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" autoComplete='false' class="form-control" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" placeholder="B-234"/>
            <label for="floatingPassword">Room Number</label>
          </div>
          <div class="checkbox mb-3">
            <label className='text-light'>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-danger" type="submit">Subscribe Now</button>

          {/* <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small> */}
        </form>
      </div>
    </div>
  </div>

  <Footer/>
    </div>
  )
}

export default Home
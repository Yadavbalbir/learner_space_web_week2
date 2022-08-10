import React from 'react'
import Footer from '../../components/footer/Footer';
import InventoryItem from '../../components/inventoryItem/InventoryItem';
import Navbar from '../../components/navbar/Navbar';
import Inventory from '../../data/music.json'

function Music() {
  console.log(Inventory);
  return (
    <div>
        <Navbar musicactive=" bg-warning rounded-3"/>
        <div className="music-heading">
            <div class="bg-dark text-secondary px-4 py-5 text-center">
              <div class="py-5">
                <h1 class="display-5 fw-bold text-white">Music Inventory Booking</h1>
                <div class="col-lg-6 mx-auto">
                  <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Explore</button>
                    <button type="button" class="btn btn-outline-light btn-lg px-4">Book Now</button>
                  </div>
                </div>
              </div>
            </div>      
        </div>
        <div className="container">
          <h2 className="heading text-center text-danger py-3 mb-3">Available Music Inventories</h2>
          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-2">
            { Inventory.musicItems.map(item => (
              <div class="col">
                 <InventoryItem {...item}/>
              </div>
             ))
            }
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Music;
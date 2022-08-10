import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom'
import Inventory from '../../data/music.json'

import { useInventoryCart } from '../../context/InventoryCartContext';

function Cart() {
  const idInCart = []
  const itemInCart = []
  
  const {cartItems,getCartQuantity, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart} = useInventoryCart();

  cartItems.forEach((item)=>{
    idInCart.push(item.id)
  })


  Inventory.musicItems.forEach((item)=>{
    idInCart.forEach((id)=>{
      if(id===item.id){
        itemInCart.push(item)
      }
    })
  })

  Inventory.sportItems.forEach((item)=>{
    idInCart.forEach((id)=>{
      if(id===item.id){
        itemInCart.push(item)
      }
    })
  })

  Inventory.techItems.forEach((item)=>{
    idInCart.forEach((id)=>{
      if(id===item.id){
        itemInCart.push(item)
      }
    })
  })



  console.log("itemsInCart: ",JSON.stringify(itemInCart))

  return (
    <div>
        <Navbar/>
        
        {cartItems.length===0 ? (
            <div className="container">
              <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div class="col-10 col-sm-8 col-lg-6">
                    <img src="/img/emptycart.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                  </div>
                  <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">No items in Cart</h1>
                    <hr/>
                    <h4 className='text-center'>Add Items</h4>
                     <Link to="/music"> <button className="btn btn-danger py-2 mt-2 w-100">Add Music Inventory</button> </Link> <br />
                     <Link to="/sports"> <button className="btn btn-dark py-2 mt-2 w-100">  Add Sports Inventory</button> </Link> <br />
                     <Link to="/tech"> <button className="btn btn-warning py-2 mt-2 w-100">Add Tech Inventory </button> </Link> <br />
                  </div>
                </div>
              </div>
            </div>
          ):<div className='container py-2 mt-2'>
              <h3 className='text-center py-2 mt-2 mb-5 text-bg-danger m-auto w-75 rounded-3'>Cart Items</h3>
              {itemInCart.map((item)=>(
                <div className="container">
                  <div className="container py-2">
                    <div class="card mb-3" style={{maxWidth: "80%", margin: "auto"}}>
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src={item.imgUrl} style={{height:"70%", width: "70%"}} class="img-fluid m-2 mt-3 align-content-center" alt="..."/>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h4 class="card-title mb-5">{item.name}</h4>
                            <button className="btn btn-dark" onClick={()=>decreaseItemQuantity(item.id)}>-</button>
                            <span className='px-2 text-dark fs-5'>{getItemQuantity(item.id)} in cart</span>
                            <button className="btn btn-dark" onClick={()=>increaseItemQuantity(item.id)}>+</button>  <br/>
                            <button className="btn btn-danger my-2" onClick={()=>removeFromCart(item.id)}>Remove from cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="container text-center py-5 ">
                <button className="btn btn-primary" onClick={()=>{alert("item issued successfully")}} style={{margin: "auto"}}>Proceed to Checkout</button>
              </div>
            </div>
          } 7

        <div className="footer" style={{marginTop: "90px"}}>
            <Footer/>
        </div>
        
    </div>
  )
}

export default Cart;
import React from 'react'
import { useInventoryCart } from '../../context/InventoryCartContext';

function InventoryItem({id, name, imgUrl}) {
  const {getItemQuantity, increaseItemQuantity,  removeFromCart} = useInventoryCart()
  const quantity = getItemQuantity(id);
  return (
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4">
          <div class="d-flex flex-column h-100 p-2 px-5 pb-3 text-white text-shadow-1">
            <img src = {imgUrl} height="280" alt="" />
            <h3 class="pt-2 mt-2 mb-4  lh-1 ">{name}</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                {quantity===0 ? (
                  <button className="btn btn-info rounded-3" onClick={()=> increaseItemQuantity(id)}>Add to cart</button>
                ):<button className="btn btn-danger rounded-3" onClick={() => removeFromCart(id)}>Remove from cart</button>}            
              </li>
              <li class="d-flex align-items-center me-3">
                <bi className="ba bi-1-square"></bi>
                <small className='px-2'>{id}</small>
              </li>
              <li class="d-flex align-items-center">
                <bi className="ba bi-1-square"></bi>
                <small className='px-2'>{quantity}</small>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default InventoryItem;
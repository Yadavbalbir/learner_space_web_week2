import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

import { useInventoryCart } from '../../context/InventoryCartContext';

function Navbar(props) {
  const {getCartQuantity} = useInventoryCart()
  return (
    <div className='bg-dark '>
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height={40} />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className={"nav-link px-2 link-light " + props.homeactive}>Home</Link></li>
        <li><Link to="/music" className={"nav-link px-2 link-light " + props.musicactive}>Music Inventory</Link></li>
        <li><Link to="/sports" className={"nav-link px-2 link-light " + props.sportsactive}>Sports Inventory</Link></li>
        <li><Link to="/tech" className={"nav-link px-2 link-light " + props.techactive}>Tech Inventory</Link></li>
        <li><Link to="/contact-us" className={"nav-link px-2 link-light " + props.contactactive}>Contact Us</Link></li>
      </ul>

      <div class="col-md-3 text-end">
       <Link to="/cart"> <button type="button" className="btn btn-outline-primary me-2 rounded-3"><i className='bi bi-cart pe-2'></i>Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getCartQuantity()}
              </span>
       </button> </Link>
      </div>
    </header>
  </div>
    </div>
  )
}

export default Navbar;
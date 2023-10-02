import React from 'react'
import "./styles/Navbar.css";

const Navbar = ({setShow}) => {
  return (
    <>
        <div className="nav-box">
            <span className="my_shop" onClick={()=>setShow(true)}>Shopping Cart</span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span><i className="fa-solid fa-cart-shopping"></i></span>
                <span>0</span>
            </div>
        </div>
    </>
  )
}

export default Navbar
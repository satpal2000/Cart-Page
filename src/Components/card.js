import React from 'react'
import "./styles/Amazon.css";

const Cards = ({item,handleClick}) => {
    const {id,title,author,price,img} = item;
  return (
    <div className="Cards">
        <div className="img_box">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
            <button className='cart-button' onClick={()=> handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards
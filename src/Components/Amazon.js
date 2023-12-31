import React, { useState } from 'react'
import list from "../Data";
import Cards from './card';
import "./styles/Amazon.css";


const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
    </section>
  )
}

export default Amazon
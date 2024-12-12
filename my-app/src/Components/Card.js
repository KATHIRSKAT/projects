import React from 'react'
import { BsFillBagHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

function Card({key,img,star,title,reviews,newPrice,prevPrice}) {
  return (
    <section className='card'>
        <img src={img} alt='shoe'
        className = 'card-img'/>
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
            {star} {star} {star} {star}
            <span className="total-reviews"> {reviews} </span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{newPrice}</del> {prevPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill 
              className='bag-icon'/> 
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card;
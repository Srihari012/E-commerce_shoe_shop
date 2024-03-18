
import {IoBag} from 'react-icons/io5'

function Card({img,title,star,reviews,newPrice,prevPrice}) {
  return(
    <section className='card'>
          <img src={img} alt={title} className='card-img'
          />
          <div className='card-details'>
            <h3 className='card-title'>{title}</h3>
            <section className='card-review'>
              {star}{star}{star}{star}
              <span className='total-reviews'> {reviews}</span>
            </section> className
            <section className='card-price'>
              <div className='price'>
                ₹<del>{prevPrice}</del> {newPrice}
              </div>
              <div className='bag-icon'>
               <IoBag/>
              </div>
            </section>
          </div>
        </section>
  );
}
export default Card
import React from 'react'
import { FaHeart, FaEye } from 'react-icons/fa';
import LikeButton from './LikeButton';

function Box({product, lajkovati, dislajkovati}) {

  
    
   /* function klik(){
   
        console.log("dodat br");
    }*/
    

  return (
    <div className="card" style={{ margin: 10, borderStyle:'none' }}>
      <div className='card-body'>
      <img className='card-img-top' src={product.imgLink} alt= 'Slika' width={150} height={150}/>
          <h3 className='card-title'>
              {product.title}
          </h3>
          <p className='card-text'>{product.description}</p>
          <LikeButton product = {product} txtDugme='Lajkuj sliku' lajkuj={lajkovati}/>
           if(product.amount === 0){
            
          } else{
            <LikeButton product = {product} txtDugme='Dislajkuj sliku' lajkuj={dislajkovati}/>
          }

          

      </div>
    </div>
  )
}

export default Box;

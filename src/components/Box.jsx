import React from 'react'
import { FaHeart, FaEye } from 'react-icons/fa';


function Box({product, klik, broj}) {

    
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
          <button className="btn" onClick={() =>klik(product.id)}>
          <FaHeart />
        </button >
        <button className="btn" >
            {broj}
        </button>
        <button className="btn">
        <FaEye/>
        </button>

      </div>
    </div>
  )
}

export default Box;

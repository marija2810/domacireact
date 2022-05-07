import React from 'react'

function Box({product}) {


  return (
    <div className='card' style={{margin: 10 }}>
      <div className='card-body'>
      <img className='card-img-top' src="https:/picsum.photos/200" alt="Neka slika" />
          <h3 className='card-title'>
              {product.title}
          </h3>
          <p className='card-text'>{product.description}</p>
      </div>
    </div>
  )
}

export default Box;

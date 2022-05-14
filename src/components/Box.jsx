import React from 'react'
import { FaHeart, FaEye } from 'react-icons/fa';
import LikeButton from './LikeButton';

function Box({slika, lajkovati, dislajkovati}) {

  const stil = {backgroundColor: 'rgb(255, 204, 204)', color: '#ffff'}

  return (
    
<div className='col filmCard'>
      <div className=" card" style={stil}>
                <div className="card-body">
                    <h5 className="card-title">{slika.title}</h5>
                    <p className="card-text">Opis: {slika.description}</p>
                    <img className='card-img-top' src={slika.imgLink} alt= 'Slika' width={150} height={150}/>
                    <p className="card-text">Broj lajkova: {slika.amount}</p>
                    <div className='d-flex justify-content-start' >
                    <LikeButton txtDugme='Lajkuj sliku' slika = {slika}  lajkFunkcija={lajkovati}/>
                    <LikeButton txtDugme='Dislajkuj sliku' slika = {slika}  lajkFunkcija={dislajkovati}/>
                  
                </div>
       </div>
          </div>
       </div>
      
  );

           
    
  
}

export default Box;

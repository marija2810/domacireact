 import React from 'react';
 import Box from '../components/Box';
 
 const Galery = ({products, lajkovati, dislajkovati}) => {

   /* const prod = {
        title: "Naziv",
        description: "opis"
    }*/
     return <div className='all-products'>
         <h2 className='naslovGalerije'>Slikagram</h2>
         {products.map((slika)=>{
             <Box product={slika} key={slika.id} lajkovati = {lajkovati} dislajkovati = {dislajkovati} />
             
         })}
     </div>
 };
 
 
 export default Galery;
 
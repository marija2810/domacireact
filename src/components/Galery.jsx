 import React from 'react';
 import Box from './Box';
 
 const Galery = ({products, klik, broj}) => {

   /* const prod = {
        title: "Naziv",
        description: "opis"
    }*/
     return <div className='all-products'>
         {products.map((pr)=>{
             return <Box product={pr} key={pr.id} klik = {klik}
             broj = {broj} />
         })}
     </div>
 };
 
 
 export default Galery;
 
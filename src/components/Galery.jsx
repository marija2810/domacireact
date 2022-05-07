 import React from 'react';
 import Box from './Box';
 
 const Galery = ({products}) => {

   /* const prod = {
        title: "Naziv",
        description: "opis"
    }*/
     return <div className='all-products'>
         {products.map((pr)=>{
             return <Box product={pr} key={pr.id} />
         })}
     </div>
 };
 
 
 export default Galery;
 
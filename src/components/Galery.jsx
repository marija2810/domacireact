 import React from 'react';
 import Box from './Box';
 
 const Galery = () => {

    const name = 'Naziv';
    const desc = 'Opis';
     return <div className='all-products'>
         <Box title = {name} description = {desc}/>
         <Box title = {name} description = {desc}/>
         <Box />
     </div>;
 };
 
 
 export default Galery;
 
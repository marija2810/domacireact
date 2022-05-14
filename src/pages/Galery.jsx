 import React from 'react';
 import Box from '../components/Box';
 
 function Galery ({products, lajkovati, dislajkovati}) { 
    
        return (
            <div className='galerija'>
               
                <div className=' row row-cols-1 row-cols-sm-2 g-3'>
                    {products.map((slika) => (
                        <Box key={slika.id} slika={slika} lajkovati={lajkovati} dislajkovati={dislajkovati} />
                    ))}
                </div>
            </div>
        );
    }
 
 export default Galery;
 
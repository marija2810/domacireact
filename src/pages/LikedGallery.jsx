import React from 'react';
import Box from "../components/Box";

function LikedGallery({prikaz,dislajkovati}){
    return (
        
        <div className='galerija'>
            {prikaz.map((slika) => (
                <Box slika={slika} dislajkovati = {dislajkovati} />
            ))}

        </div>
    );
}

export default LikedGallery;
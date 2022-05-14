import React from 'react'

function LikeButton ({txtDugme, lajkFunkcija, slika }) {
  return (
    <button type='button' onClick={() => lajkFunkcija(slika.id)} 
    className = "btn btn-secondary" style={{marginRight:'20px'}}>
        {txtDugme} 
    </button>
  )
}
export default LikeButton;

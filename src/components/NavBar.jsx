import React from 'react'
import Klik from './Klik';
import {FaHeart} from 'react-icons/fa'

function Navbar({brojLajkovanihSlika}){ 
  const style = {backgroundColor: 'rgb(0,0,0)', color: 'rgb(255,255,255)'}
    const boja = {color: 'rgb(255,255,255)'}
  return (
    <nav className="navbar navbar-expand-xl navbar-light " style={style}>
            <div className="container-fluid">
                <p className="navbar-brand" style={boja}>Slikagram</p>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <Klik putanja="/" tekst="Galerija"/>
                        <Klik putanja="/galerija" tekst="Slike koje mi se sviđaju"/>
                        <Klik putanja="/forma" tekst="Pošalji poruku"/>
                        <li className='nav-link active'  style={boja}>
                             Broj lajkovanih slika: {brojLajkovanihSlika} <FaHeart  size={25} />
                        </li>

                    </ul>
                  
                </div>
            </div>
        </nav>
  )
}

export default Navbar


import React from 'react'
import Klik from './Klik';
import { FaHeart, FaPhotoVideo} from 'react-icons/fa'

function Navbar({brojLajkovanihSlika, pretraga }){ 
  const style = {backgroundColor: 'rgb(0,0,0)', color: 'rgb(255,255,255)'}
    const boja = {color: 'rgb(210,113,113)'}
  return (
    <nav className="navbar navbar-expand-xl navbar-light " style={style}>
            <div className="container-fluid">
                <p className="navbar-brand" style={boja}>Slikagram <FaPhotoVideo/></p>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <Klik putanja="/" tekst="Galerija"/>
                        <Klik putanja="/galerija" tekst="Slike koje mi se sviđaju"/>
                        <Klik putanja="/forma" tekst="Pošalji poruku"/>
                        <li className='nav-link active'  style={boja}>
                             Broj lajkovanih slika: {brojLajkovanihSlika} <FaHeart  size={25} />
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" onInput={pretraga}
                               placeholder="Pronadji sliku"/>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default Navbar


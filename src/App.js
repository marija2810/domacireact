import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Galery from './pages/Galery';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import SendMessage from './pages/SendMessage';


function App() {

  
  const[niz, setNiz] = useState([]);

  
  
  const [brojLajkovanihSlika, setBrLajkova] = useState(0);

  const [prikaz, setPrikaz] = useState([]);
    
  
    const [products,setProducts] =useState([
      {
        id: 1,
      title: "Poljska",
      description:
        "#nature #green #trees",
      amount: 0,
      imgLink: 'https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      
      },
      {
        id: 2,
      title: "Francuska",
      description:
        "#paris #night #lights",
      amount: 0,
      imgLink: 'https://images.unsplash.com/photo-1577369850389-32be613b186f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      
      },
      {
        id: 3,
      title: "Kina",
      description:
        "#beijing #china",
      amount: 0,
      imgLink: 'https://images.unsplash.com/photo-1578824381648-52f000bb5f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      },
      {
        id: 4,
      title: "Amerika",
      description:
        "#newyork #usa",
      amount: 0,
      imgLink: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 5,
      title: "Ujedinjeni Arapski Emirati",
      description:
        "#dubai #uae #burjkhalifa",
      amount: 0,
      imgLink: 'https://images.wallpaperscraft.com/image/single/dubai_building_sky_urban_landscape_28363_1400x1050.jpg',
      },
      {
        id: 6,
      title: "Holandija",
      description:
        "#amsterdam #netherlands",
      amount: 0,
      imgLink: 'https://mylittlebigworld.fr/wp-content/uploads/2021/07/14D6182C-A67E-4964-8057-85F99A9DE0E7-scaled-e1626860932657.jpg',
      },
      
      

    ]);


    function lajkovati(id)  {

      products.forEach((slika) => {
         if(slika.id ===id && slika.amount ===0){
          slika.amount++;
          setProducts(products);
          setPrikaz(products.filter((slika) => (slika.amount > 0)));
          setBrLajkova(brojLajkovanihSlika + 1);
          }
          })
          
          
    };
    
    function dislajkovati(id) {

      products.forEach((slika) => {
        if(slika.id === id && slika.amount ===1){
          slika.amount--;
          setProducts(products);
      setPrikaz(products.filter((slika) =>slika.amount > 0));
   
      if(brojLajkovanihSlika > 0) {
        setBrLajkova(brojLajkovanihSlika-1);
        }
      }
    })
   
    }

    function posaljiPoruku(){
      //    slanje email-a
          alert('Poslali ste poruku');
      }
    

    return (
    
    <div className="App">
        <BrowserRouter>
          <NavBar brojLajkovanihSlika={brojLajkovanihSlika}/>     
          <Routes>
          <Route path='/' element={<Galery products={products} lajkovati={lajkovati} dislajkovati = {dislajkovati} />}/>
            <Route path='/forma' element={<SendMessage posaljiPoruku={posaljiPoruku}/>}/>
          </Routes>
   </BrowserRouter>
    </div>
    
  );
}

export default App;

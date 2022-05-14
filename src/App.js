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
      title: "Lion",
      description:
        "The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.",
      amount: 0,
      imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/1200px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg',
      
      },
      {
        id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
      imgLink: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
      
      },
      {
        id: 3,
      title: "Parrot",
      description:
        "Parrots, also known as psittacines, are birds of the roughly 398 species in 92 genera comprising the order Psittaciformes, found mostly in tropical and subtropical regions. ",
      amount: 0,
      imgLink: 'https://t4.ftcdn.net/jpg/02/81/30/69/360_F_281306992_vYDMiuivOPqadFN4ITMYxCddMSsTd7JP.jpg',
      },
      {
        id: 4,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
      imgLink: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
      },
      {
        id: 5,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
      imgLink: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
      },
      {
        id: 6,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
      imgLink: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
      },
      
      

    ]);


    function lajkovati(id)  {

      products.forEach((slika) => {
         if(slika.id ===id ){
          slika.amount++;
          }
          })
          setProducts(products);
          setPrikaz(products.filter((slika) => (slika.amount > 0)));
          setBrLajkova(brojLajkovanihSlika + 1);
          
    };
    
    function dislajkovati(id) {

      products.forEach((slika) => {
        if(slika.id === id ){
          slika.amount--;
        }
      })
      setProducts(products);
      setPrikaz(products.filter((slika) =>slika.amount > 0));
   
      if(brojLajkovanihSlika > 0) {
        setBrLajkova(brojLajkovanihSlika-1);
      }
   
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

import './App.css';
import NavBar from './components/NavBar';
import Galery from './pages/Galery';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

function App() {

  const [broj, setBr] = useState(0);
  const[niz, setNiz] = useState([]);

  const [like, setlike] = useState(0);
  const[dislike, setdislike] = useState(0)
const [likeactive, setlikeactive] = useState(false)
const [dislikeactive, setdislikeactive] = useState(false)
  
  const [brojLajkovanihSlika, setBrLajkova] = useState(0);

  const [prikaz, setPrikaz] = useState([]);
    
  
    const [products,setProducts] =useState ([
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

      
      products.forEach((product) => {
         if(product.id ===id ){
          product.amount =  product.amount+1;
          }
          });
          setProducts(products);
          setPrikaz(products.filter((product) => (product.amount > 0)));
          setBrLajkova(brojLajkovanihSlika + 1);
          
    };
    
    function dislajkovati(id) {

      products.forEach((product) => {
        if(product.id === id ){
          product.amount = product.amount -1;
        }
      });
      setProducts(products);
      setPrikaz(products.filter((product) =>product.amount > 0));
   
      if(brojLajkovanihSlika > 0) {
        setBrLajkova(brojLajkovanihSlika-1);
      }
   
    }


   

    return (
    
    <div className="App">
        <Router>
          <NavBar brojLajkovanihSlika={brojLajkovanihSlika}/>     
          
          <Routes>
            <Route path='/' element={<Galery products={products} lajkovati ={ lajkovati} dislajkovati = {dislajkovati}/>}/>
          </Routes>
   </Router>
    </div>
    
  );
}

export default App;

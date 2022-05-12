import './App.css';
import NavBar from './components/NavBar';
import Galery from './components/Galery';
import { useState } from 'react';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

function App() {

  const [broj, setBr] = useState(0);
  const[niz, setNiz] = usestate([]);

  const [like, setlike] = useState(0);
  const[dislike, setdislike] = useState(0)
const [likeactive, setlikeactive] = useState(false)
const [dislikeactive, setdislikeactive] = useState(false)
  
function likef(){
if(likeactive){
  setlikeactive(false);
  setlike(like-1);
} else{
  setlikeactive(true);
  setlike(like+1);
  if(dislikeactive){
    setdislikeactive(false);
    setlike(like+1);
    setdislike(dislike-1);
}
}
}

function likef(){
  if(dislikeactive){
    setdislikeactive(false);
    setdislike(dislike+1);
  } else{
    setdislikeactive(true);
    setdislike(dislike+1);
    if(dislikeactive){
      setlikeactive(false);
      setdislike(dislike+1);
      setlike(like-1);
  }
  }
  }

    
  
  

    const products = [
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
      
      

    ];


    function LikedPhoto (id)  {

      let errors= {};
      //const lajkovano = false;
      products.map((product) =>{
        if(product.id ===id ){
         // if(!likeactive){ 
          product.amount =  product.amount+1;
          const a = broj+1;
         setBr(a);
          
          }
         
        
          }
      );
    };

    return (
    
    <div className="App">
      <NavBar></NavBar>
      
      <Galery products = {products} klik = {LikedPhoto} broj = {broj}/>
      <Galery products = {products} klik ={LikedPhoto} broj = {broj}/>
      <Galery products = {products} klik = {LikedPhoto} broj = {broj}/>
      
   
    </div>
    
  );
}

export default App;

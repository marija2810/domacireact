import './App.css';
import NavBar from './components/NavBar';
import Galery from './components/Galery';

function App() {

  

    const products = [
      {
        id: 1,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,

      },
      {
        id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,

      },

    ];

    return (
    
    <div className="App">
      <NavBar></NavBar>
      <Galery products = {products}/>
      <Galery products = {products}/>
      <Galery products = {products}/>
   
    </div>
    
  );
}

export default App;

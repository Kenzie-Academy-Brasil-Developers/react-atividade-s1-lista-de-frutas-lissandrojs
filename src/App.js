import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import FruitList from './componets/FruitList';

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const somaValor = (previousValue, currentValue) => previousValue + currentValue.price;
  const totalPrice = fruits.reduce(somaValor,0)
  const filtraRedFruits = ()=> {
    const filtroCor = fruits.filter((cor)=> cor.color === "red" )
    return setFruits(filtroCor)
  }
  return (
    <div className="App">
      <header className="App-header">
        <span>{totalPrice}</span>
        <FruitList frutas={fruits}/>
        <button className='btn-filtrar' onClick={filtraRedFruits} >Filtrar por cor</button>
      </header>
    </div>
  );
}

export default App;

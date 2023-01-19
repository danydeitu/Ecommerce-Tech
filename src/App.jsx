
import React from 'react'
import CartWidget from './components/CartWidget/CartWidget';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { computeHeadingLevel } from '@testing-library/react';
import Counter, { ItemCount } from './components/ItemCount/ItemCount.jsx';
const App =() =>{
  return (
    <div>
    <Navbar />
    < CartWidget cantCarrito ={10} />
    <ItemCount valInicial={1} stock={20}/>
    </div>
  )
}
export default App;
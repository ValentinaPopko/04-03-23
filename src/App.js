import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './components/header/Header.js';
import './App.css';
import Slider from './components/main/Slider.js';
import AllCards from './components/main/AllCards.js';
import Cart from './components/main/Cart/cart.js';

function App() {

  const [openCart, SetOpenCart] = useState(false)



    return <div>
      <Cart openCart={openCart} onCloseCart={() => SetOpenCart (false)} />
      <Header onOpenCart={() => SetOpenCart (true)}/>
      <Slider />
      <AllCards />

    </div>
  }

export default App



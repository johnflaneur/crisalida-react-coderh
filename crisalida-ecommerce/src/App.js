
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { AppRouter } from './router/AppRouter'; 
import { Routes, Route,Navigate } from 'react-router-dom'
import { CartProvider } from './context/contextCart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartView } from './components/CartView/cartView';
import { Checkout } from './components/Checkout/Checkout';
import {NavbarComp} from './components/Navbar-Container/NavbarComp';

function App() {
  return (
    <CartProvider>

      <BrowserRouter>
        <NavbarComp/>
    
          <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/products/:cardId" element={ <ItemListContainer /> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
            <Route path="/cart" element={ <CartView /> } />
            <Route path="/checkout" element={ <Checkout/> } />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes> 

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;

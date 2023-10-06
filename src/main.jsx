import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import { AppContext } from './context/AppContext'
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Producto } from './components/Producto';
import { Carrito } from './components/carrito';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <Router>
  <React.StrictMode>
    <Navbar/>
    <Routes>            
          <Route path="/" element={<Principal />} />
          <Route path="/cart" element={<Carrito/>} />
    </Routes>
  </React.StrictMode>
  </Router>   
  </AppContext>
  
)

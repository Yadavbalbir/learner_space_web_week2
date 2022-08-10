import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Music from "./pages/music/Music";
import Sports from "./pages/sports/Sports";
import Tech from "./pages/tech/Tech";
import Cart from "./pages/cart/Cart";
import { InventoryCartProvider } from "./context/InventoryCartContext";

// const shoot = (a, event)=>{
//   alert(event.type);
// }

function App() {
  return (
    <BrowserRouter>
    <InventoryCartProvider>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/music" element={<Music />}/>
        <Route path="/sports" element={<Sports />}/>
        <Route path="/tech" element={<Tech />}/>
        <Route path="/cart" element={ <Cart/> }/>
    </Routes>
    </InventoryCartProvider>
    </BrowserRouter>
    
  );
}

export default App;
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

// const shoot = (a, event)=>{
//   alert(event.type);
// }

function App() {
  return (
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/music" element={<Music />}/>
        <Route path="/sports" element={<Sports />}/>
        <Route path="/tech" element={<Tech />}/>
    </Routes>
      {/* <button onClick={(event)=>shoot("onclick shot happened", event)}>click me</button> */}
    </BrowserRouter>
    
  );
}

export default App;
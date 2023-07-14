import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/anil.scss"

import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";

import { useEffect } from "react";
import Footer from "./components/Footer";
function App() {
 useEffect(()=>{
  document.title="Gandhapudi"
 },[])

 
  return (
   <>
   <Router>
   
    <Header />
    <Routes>
     
    
      <Route path="/" element={<Home/>} />
     
    </Routes>
    <Footer />
   </Router>
   </>
  );
}

export default App;

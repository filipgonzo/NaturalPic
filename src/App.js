import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";


import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./contexts/MyContext";

export default function App() {
  const endpoint = "../fotos.json";
  

  const [fotos, setFotos] = useState([]);
  const estadoGlobal = { fotos, setFotos };

  async function fotosData() {
    const res = await fetch(endpoint);
    const data = await res.json();
    setFotos(data.photos);
    console.log(setFotos)
  }



  useEffect(() => {
    fotosData();
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}


//min 30:18 
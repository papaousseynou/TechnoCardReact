// import logo from './logo.svg';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import AddTechno from "./pages/AddTechno";
import TechnoList from "./pages/TechnoList";
import "./css/app.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  // au premier chargement de recuperer tous ce qui se trouve dans le localStorage
  useEffect(() => {
    console.log("useEffect with []");
    setTechnos(storedTechnos);
  }, []);
  useEffect(() => {
    console.log("useEffect with [technos]");
    setStoredTechnos(technos);
  }, [technos]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    // cloner l'objet technos
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }
  // Suppression à l'aide des etats
  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<AddTechno handleAddTechno={handleAddTechno} />}
        />
        <Route
          path="/list"
          element={
            <TechnoList
              technos={technos}
              handleDeleteTechno={handleDeleteTechno}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

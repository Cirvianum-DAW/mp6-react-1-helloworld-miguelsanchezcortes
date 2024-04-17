import React from "react";
import Form from "./components/Form";
import ReactDOM from 'react-dom';
import { useState } from "react";
import './index.css';


function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat"); // Afegim la variable d'estat tipusEstudiant
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  }; // Afegim la funció que actualitza el valor de la variable d'estat tipusEstudiant
  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);
  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "no-graduat"
      ? setNGPlaces(updatedPlaces)
      : setGPlaces(updatedPlaces);
      console.log(tipusEstudiant)
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles No Graduats: {ngPlaces}
        </label>
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles Graduats: {gPlaces}
        </label>
        <label className="mr-2">Selecciona Tipus d'Estudiant:</label>
        {/* Afegim el desplegable que permet triar d'acord amb les variables i que
        crida la funció handleChange */}
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === "no-graduat" ? ngPlaces : gPlaces}
      />
    </div>
  );
}

export default App;

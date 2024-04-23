import React from "react";
import Form from "./components/Form";
import ReactDOM from 'react-dom';
import { useState } from "react";
import './index.css';
import StudentList from "./studentList";


function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("Grau"); // Afegim la variable d'estat tipusEstudiant
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  }; // Afegim la funció que actualitza el valor de la variable d'estat tipusEstudiant
  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);
  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "Grau"
      ? setNGPlaces(updatedPlaces)
      : setGPlaces(updatedPlaces);
    console.log(tipusEstudiant)
  };
  const [action, setAction] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');
  const [detallsEstudiant, setDetallEstudiants] = useState([]);
  const handleItemSelection = (action, selectedItemId) => {
    setAction(action);
    setSelectedItemId(selectedItemId);
  };
  const restaurarPlaces = (pgm) => {
    pgm === 'Grau' ? setGPlaces(gPlaces + 1) : setNGPlaces(ngPlaces + 1);
  };
  return (
    <div className="App flex h-screen flex-col items-center justify-center ">
      <div className="programes my-2">
        <h3 className="title my-2 text-2xl text-blue-500">
          Formulari d'inscripció d'estudiants.
        </h3>
        <ul className="ulInscripcio ">
          <li
            className="parentLabels my-2 flex items-center justify-evenly"
            onChange={handleChange}
          >
            <label className="radioLabel">
              <input
                type="radio"
                value="Grau"
                name="programGroup"
                defaultChecked
                className="radioInput mr-2"
              />
              Grau
            </label>
            <label className="radioLabel">
              <input
                type="radio"
                value="PostGrau"
                name="programGroup"
                className="radioInput mr-2"
              />
              PostGrau
            </label>
          </li>
          <li className="parentLabels my-2">
            Places disponibles per estudiant{' '}
            <strong>
              {tipusEstudiant}:{' '}
              {tipusEstudiant === 'PostGrau' ? gPlaces : ngPlaces}
            </strong>
          </li>
        </ul>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === 'PostGrau' ? gPlaces : ngPlaces}
        setDetallsEstudiant={setDetallEstudiants}
        handleItemSelection={handleItemSelection}
      />
      <StudentList
        detallsEstudiant={detallsEstudiant}
        setDetallsEstudiant={setDetallEstudiants}
        action={action}
        setAction={setAction}
        selectedItemId={selectedItemId}
        restaurarPlaces={restaurarPlaces}
      />
    </div>
  );
}

export default App;

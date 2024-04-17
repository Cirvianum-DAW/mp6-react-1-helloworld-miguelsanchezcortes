import React, { useState } from "react";
function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Benvingut ${firstName} ${lastName}!`);
    // Afegim la crida a la funció setPlacesDisponibles
    props.setPlacesDisponibles(props.placesActuals - 1);
  };
  return (
    
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-8">
          Detalls d'estudiant: {props.tipusEstudiantSelect}
        </h1>
        <label>Nom:</label>
        <br />
        <input
          className="w-full mb-4 p-2 rounded-lg bg-gray-200"
          type="text"
          name="fname"
          onBlur={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Cognom:</label>
        <br />
        <input className="w-full mb-4 p-2 rounded-lg bg-gray-200"
          type="text" name="lname"
          onBlur={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
        <input className="bg-blue-600 text-white rounded-lg w-full mb-4 p-2" type="submit" value="Submit" />
      </form>
    </div>


  );
  

}
export default Form;
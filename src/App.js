import React, { useState } from 'react';
import './App.css'
import PlanetSelection from "./components/PlanetSelection";

const App = () => {
  const [originPlanet, setOriginPlanet] = useState('');
  const [destinationPlanet, setDestinationPlanet] = useState('');

  const handlePlanetSelection = (planet) => {
    if (!originPlanet) {
      setOriginPlanet(planet);
    } else if (!destinationPlanet && planet !== originPlanet) {
      setDestinationPlanet(planet);
    }
  };

  return (
      <div className="App">
        <PlanetSelection onPlanetSelect={handlePlanetSelection} />
      </div>
  );
};

export default App;

import React, { useState } from 'react';
import './PlanetSelection.css';
import ReservationForm from "./ReservationForm";

const PlanetSelection = () => {
    const [originPlanet, setOriginPlanet] = useState('');
    const [destinationPlanet, setDestinationPlanet] = useState('');

    const handlePlanetClick = (planet) => {
        if (!originPlanet) {
            setOriginPlanet(planet);
        } else if (!destinationPlanet && planet !== originPlanet) {
            setDestinationPlanet(planet);
        }
    };

    return (
        <div className="planet-selection-container">
            <div className="planet planet-sun" onClick={() => handlePlanetClick('Sun')}></div>
            <div className="planet planet-mercury" onClick={() => handlePlanetClick('Mercury')}></div>
            <div className="planet planet-venus" onClick={() => handlePlanetClick('Venus')}></div>
            <div className="planet planet-earth" onClick={() => handlePlanetClick('Earth')}></div>
            <div className="planet planet-mars" onClick={() => handlePlanetClick('Mars')}></div>
            <div className="planet planet-jupiter" onClick={() => handlePlanetClick('Jupiter')}></div>
            <div className="planet planet-saturn" onClick={() => handlePlanetClick('Saturn')}></div>
            <div className="planet planet-uranus" onClick={() => handlePlanetClick('Uranus')}></div>
            <div className="planet planet-neptune" onClick={() => handlePlanetClick('Neptune')}></div>

            {originPlanet && destinationPlanet && (
                <ReservationForm
                    originPlanet={originPlanet}
                    destinationPlanet={destinationPlanet}
                />
            )}
        </div>
    );
};

export default PlanetSelection;

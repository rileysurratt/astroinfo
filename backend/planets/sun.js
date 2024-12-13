// Calculate the sun

const calculateMeanAnomaly = require("../calculations/meanAnomaly");

const sun = {
    meanAnomaly: 282.9404,
    meanAnomaly: 282.9404,
    meanAnomalyRate: 35999.7683,
    meanLongitude: 282.9404,
    meanLongitudeRate: 35999.7683,
    eccentricity: 0.0167086,    // Eccentricity of the Earth's orbit
};

function calculateSunPosition(jdn){
    const m = calculateMeanAnomaly(jdn, sun);
    
}
// Mean Anomaly (M) -- given JDN and planet

function calculateMeanAnomaly(jdn, planet){
    const t = (jdn - 2451545.0) / 365.25;   // time in Julian centuries since epoch (2451545.0) = Jan 1, 2000
    const m = planet.meanAnomaly + planet.meanAnomalyRate * t; // mean anomaly of a planet
    return m;

}

module.exports = calculateMeanAnomaly;
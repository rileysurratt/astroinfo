// Mean Longitutde (L) -- 

function calculateMeanLongitude(jdn, planet){
    const t = (jdn - 2451545.0) / 365.25; // time
    const l = planet.meanLongitude + planet.meanLongitudeRate * t;  // mean longitude at given JDN
    return l;
    

}

module.exports = calculateMeanLongitude;
// True Anomaly (v) from a given Mean Anomaly (M) & eccentricity

function calculateTrueAnomaly(m, e){
    const v = m + (180 / Math.PI) * e * Math.sin(m);
    return v;

}

module.exports = calculateTrueAnomaly;
// True Longitude (λ) from a given Mean Longitude (L) & True Anomaly (v)

function calculateTrueLongitude(l, v){
    const lambda = l + v;
    return lambda;

}

module.exports = calculateTrueLongitude;
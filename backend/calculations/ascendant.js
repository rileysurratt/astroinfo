// Ascendant (Rising) from given JDN, latitude, longitude

function calculateAscendant(jdn, latitude, longitude){
    const t = (jdn - 2451545.0) / 365.25;
    const asc = 360 / 24 * (t % 24) + longitude;
    const ascLatitude = latitude;
    const ascLongitude = asc;
    return { ascLatitude, ascLongitude}

}

module.exports = calculateAscendant;
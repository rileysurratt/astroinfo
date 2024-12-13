// Julian Day Number (JDN) calculate from a users inputted birthdate

function calculateJDN(year, month, day){
    // Adjust for January & February 
    if (month < 3){
        year -= 1;
        month += 12;
    }
    // Adjust for transition from JDN to Gregorian Calendar, and account for leap years (A & B)
    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4)

    // Calculate Julian Day Number
    const jdn = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;

    return jdn;

}

module.exports = calculateJDN;
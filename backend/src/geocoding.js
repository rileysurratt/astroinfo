// Geocoding with Google Geocoding API -- using a static approach with autocomplete for cities
// turns the city user enters into longitude and latitude which then helps calculate planet positions at birth
const axios = require('axios');

async function getGeocode(city) {
    const apiKey = process.env.GOOGLE_GEOCODING_API_KEY; // Load your API key from .env
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng
            };
        } else {
            throw new Error('Geocoding API error: ' + response.data.status);
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = { getGeocode };
"use strict";

const div = document.getElementById("div");

async function getInfo() {
    // could potentially use a `` string to automatically detect user location, time, etc and input that to the
    // link to get weather info for a user's area
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,precipitation&forecast_days=1");
    const data = await response.json();
    return data;
}

async function doStuff() {
    const weatherData = await getInfo();

    for (const key in weatherData.current) {
        div.innerHTML += `
            ${key}: 
            ${weatherData.current[key]}
            ${weatherData.current_units[key]}
            <br>
        `
    }

    for (const key in weatherData) {
        if (key !== "current" && key !== "current_units") {
            div.innerHTML += `
                ${key}: 
                ${weatherData[key]}
                <br>
            `
        }
    }
}



doStuff();
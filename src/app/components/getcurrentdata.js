import { createCurrentLocation } from './createcurrent';

export function getCurrentWeather(location) {
    fetch(
        `http://api.weatherapi.com/v1/current.json?key=5a3a6c23c7ba4e3db0a192727230710&q=${location}&aqi=yes`
    )
        .then((response) => response.json())
        .then((response) => {
            // This is the .location data
            const currentCountry = response.location.country;
            const currentTimeDate = response.location.localtime;
            const currentName = response.location.name;
            const currentRegion = response.location.region;

            // This is the .current data used
            const currentCondition = response.current.condition;
            const currentTempF = response.current.temp_f;
            const currentTempC = response.current.temp_c;
            const currentFeelsF = response.current.feelslike_f;
            const currentFeelsC = response.current.feelslike_c;
            const currentHumidity = response.current.humidity;

            createCurrentLocation(
                currentTempF,
                currentTempC,
                currentFeelsF,
                currentFeelsC,
                currentHumidity,
                currentCondition,
                currentCountry,
                currentTimeDate,
                currentName,
                currentRegion
            );
        });
}

// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import date from 'date-and-time';

export function createCurrentLocation(
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
) {
    // This will take the data received and build a card from it to print current weather conditions
    const locationPrint = document.getElementById('main');

    const baseCard = document.createElement('div');
    baseCard.id = 'basecard';
    locationPrint.appendChild(baseCard);
    // This container will hold 2 more containers with the temp and the humidity
    const containerOne = document.createElement('div');
    containerOne.id = 'containerone';
    baseCard.appendChild(containerOne);

    const innerContainerOne = document.createElement('div');
    innerContainerOne.id = 'innercontainerone';
    containerOne.appendChild(innerContainerOne);
    // These show the tempF and tempC values
    const tempF = document.createElement('p');
    tempF.id = 'tempf';
    tempF.textContent = `The current temp is ${currentTempF}F`;
    innerContainerOne.appendChild(tempF);

    const tempC = document.createElement('p');
    tempC.id = 'tempc';
    tempC.textContent = `The current temp is ${currentTempC}C`;
    innerContainerOne.appendChild(tempC);

    const innerContainerTwo = document.createElement('div');
    innerContainerTwo.id = 'innercontainertwo';
    containerOne.appendChild(innerContainerTwo);
    // This holds the text for the humidty percentage
    const humidityTxt = document.createElement('p');
    humidityTxt.id = 'texthumidity';
    humidityTxt.textContent = 'Current Humidity is';
    innerContainerTwo.appendChild(humidityTxt);

    const humidity = document.createElement('p');
    humidity.id = 'humidity';
    humidity.textContent = `${currentHumidity}%`;
    innerContainerTwo.appendChild(humidity);
    // This container will hold 2 containers with the country name region and conditions
    const containerTwo = document.createElement('div');
    containerTwo.id = 'containertwo';
    baseCard.appendChild(containerTwo);

    const innerContainerThree = document.createElement('div');
    innerContainerThree.id = 'innercontainerthree';
    containerTwo.appendChild(innerContainerThree);
    // The code below creates and prints the counrty,name and region
    const country = document.createElement('h2');
    country.id = 'country';
    country.textContent = currentCountry;
    innerContainerThree.appendChild(country);

    const name = document.createElement('p');
    name.id = 'name';
    name.textContent = `${currentName}, ${currentRegion}`;
    innerContainerThree.appendChild(name);

    const innerContainerFour = document.createElement('div');
    innerContainerFour.id = 'innercontainerfour';
    containerTwo.appendChild(innerContainerFour);
    // This creates and prints the condition object
    const conditionImg = document.createElement('img');
    conditionImg.src = currentCondition.icon;
    conditionImg.id = 'conditionicon';
    innerContainerFour.appendChild(conditionImg);

    const condition = document.createElement('p');
    condition.id = 'condition';
    condition.textContent = `Current conditions are ${currentCondition.text}.`;
    innerContainerFour.appendChild(condition);
    // This container will be 2 containers with the feelslike and time and date
    const containerThree = document.createElement('div');
    containerThree.id = 'containerthree';
    baseCard.appendChild(containerThree);

    const innerContainerFive = document.createElement('div');
    innerContainerFive.id = 'innercontainerfive';
    containerThree.appendChild(innerContainerFive);
    // This code creates and prints the feels like temps
    const feelF = document.createElement('p');
    feelF.id = 'feelf';
    feelF.textContent = `Feels Like ${currentFeelsF}F`;
    innerContainerFive.appendChild(feelF);

    const feelC = document.createElement('p');
    feelC.id = 'feelc';
    feelC.textContent = `Feels Like ${currentFeelsC}C`;
    innerContainerFive.appendChild(feelC);

    const innerContainerSix = document.createElement('div');
    innerContainerSix.id = 'innercontainersix';
    containerThree.appendChild(innerContainerSix);
    // This code will take the date time data and slice it and use those values to print the current time or date.
    const dateItem = document.createElement('p');
    const dateVal = currentTimeDate.slice(0, 10);
    dateItem.id = 'date';
    dateItem.textContent = moment(dateVal).format('MMMM Do YYYY');
    innerContainerSix.appendChild(dateItem);

    const time = document.createElement('p');
    const timeVal = new Date(currentTimeDate);
    time.id = 'time';
    time.textContent = date.format(timeVal, 'hh:mm A');
    innerContainerSix.appendChild(time);
}

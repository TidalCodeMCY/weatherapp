import { getCurrentWeather } from './app/components/getcurrentdata';
import { createPage } from './app/components/mainload';
import { resetCard } from './app/components/resetcard';
import { saveData } from './app/components/savedata';
import './style.css';

// This loop will check for localstorage value if their is then it will use that in creating the card on load
if (localStorage.getItem('location') === null) {
    createPage();
} else {
    createPage();
    getCurrentWeather(localStorage.getItem('location'));
}

(function () {
    const locationSearch = document.getElementById('searchbar');

    locationSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            resetCard();
            const userVal = locationSearch.value;
            getCurrentWeather(userVal);
            saveData(locationSearch.value);
            locationSearch.value = '';
        }
    });
})();

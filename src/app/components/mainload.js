export function createPage() {
    const root = document.body;

    const rootDiv = document.createElement('div');
    rootDiv.id = 'rootdiv';
    root.appendChild(rootDiv);

    // This is the code that builds the header of the webpage
    const header = document.createElement('header');
    header.id = 'header';
    rootDiv.appendChild(header);

    const headerContainer = document.createElement('div');
    headerContainer.id = 'headercontainer';
    header.appendChild(headerContainer);

    const imgHeader = document.createElement('img');
    imgHeader.id = 'imgheader';
    headerContainer.appendChild(imgHeader);

    const headerH1 = document.createElement('h1');
    headerH1.id = 'currentweather';
    headerH1.textContent = 'Current Weather';
    headerContainer.appendChild(headerH1);

    const searchBar = document.createElement('input');
    searchBar.type = 'search';
    searchBar.id = 'searchbar';
    searchBar.placeholder = 'Search Location';
    header.appendChild(searchBar);
    // This is the code that builds the main of the page where the weather card is shown
    const main = document.createElement('main');
    main.id = 'main';
    rootDiv.appendChild(main);
    // This is the code that builds the footer of the page
    const footer = document.createElement('footer');
    footer.id = 'footer';
    rootDiv.appendChild(footer);

    const credit = document.createElement('p');
    credit.id = 'credit';
    credit.innerText = 'Powered by ';

    const creditAnchor = document.createElement('a');
    creditAnchor.id = 'creditanchor';
    creditAnchor.textContent = 'WeatherAPI.com';
    creditAnchor.href = 'https://www.weatherapi.com/';
    creditAnchor.title = 'Free Weather API';
    credit.appendChild(creditAnchor);
    footer.appendChild(credit);

    // add a github link after the credit anchor during the decoration phase.
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); }) // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    const trifecta = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');
    // for (let i = 0; i < prophets.length; i++ ) { 
    trifecta.forEach(town => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('div');
      let founded = document.createElement('div');
      let population = document.createElement('div');
      let rainfall = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      founded.textContent = 'Year Founded:' + ' ' + town.yearFounded;
      population.textContent = 'Current Population:' + ' ' + town.currentPopulation;
      rainfall.textContent = 'Average Rain Fall:' + ' ' + town.averageRainfall;
      image.setAttribute('src', `images/${town.photo}`);
      image.setAttribute('alt', `${town.name}`);
      h2.setAttribute('class', 'data');
      motto.setAttribute('class', 'mottodiv');
      founded.setAttribute('class', 'foundeddiv');
      population.setAttribute('class', 'populationdiv');
      rainfall.setAttribute('class', 'fainfalldiv');

      
      card.appendChild(h2);
      card.appendChild(motto);
      card.appendChild(founded);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(image);

      document.querySelector('div.towns').appendChild(card);
    }) 
  });   
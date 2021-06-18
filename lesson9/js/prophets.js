const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    // for (let i = 0; i < prophets.length; i++ ) { 
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      para1.textContent = 'Date of Birth:' + ' ' + prophet.birthdate;
      para2.textContent = 'Place of Birth:' + ' ' + prophet.birthplace;
      image.setAttribute('src', prophet.imageurl);
      image.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
      
      card.appendChild(h2);
      card.appendChild(para1);
      card.appendChild(para2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }) 
  });   

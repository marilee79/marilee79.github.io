const businessURL = 'json/businesses.json';

fetch(businessURL)
  .then(function (response) {
      return response.json();
  })
  .then(function(jsonObject){
    console.log(jsonObject);
      
      const business = jsonObject['businesses'];
      
      business.forEach(business => {
          let card = document.createElement('section');
          let logo = document.createElement('img');
          let bizname = document.createElement('h2');
          let bizaddress = document.createElement('p');
          let bizphone = document.createElement('p');
          let bizwebsite = document.createElement('a');

          card.setAttribute("class", "col");
          logo.setAttribute('src', `images/${business.logo}`);
          logo.setAttribute('alt', `${business.name}`);
          bizname.textContent = `${business.name}`;
          bizaddress.textContent = `${business.address}`;
          bizphone.textContent = `${business.phone}`;
          bizwebsite.setAttribute('href', `https://${business.website}`);
          bizwebsite.textContent = `${business.website}`;

          card.appendChild(logo);
          card.appendChild(bizname);
          card.appendChild(bizaddress);
          card.appendChild(bizphone);
          card.appendChild(bizwebsite);

          document.querySelector('div.wrapper').appendChild(card);
      })

  });

var wrapper = document.getElementById("wrapper");

document.addEventListener("click", function (event) {
    if (!event.target.matches(".list")) return;

    event.preventDefault();
    wrapper.classList.add("list");
});

document.addEventListener("click", function (event) {
    if (!event.target.matches(".grid")) return;

    event.preventDefault();
    wrapper.classList.remove("list");
});

// const wrapper = document.querySelector("wrapper");

// wrapper.addEventListener('click', () => {

// })

//   var elements = document.querySelector('column');

//   var i;

// //   List View
//   function listView() {
//       for (i = 0; i < elements.length; i++) {
//         elements[i].style.width = "100%";
//       }
//   }

// //   Grid View
//   function gridView() {
//       for (i = 0; i < elements.length; i++){
//           elements[i].style.with = "33%";
//       }
//   }

//   var container = document.querySelector("btnContainer");
//   var btns = container.getElementsByClassName("btn");
//   for (var i = 0; i < btns.length; i++){
//       btns[i].addEventListener("click", function(){
//           var current = document.getElementsByClassName("active");
//           current[0].className = current[0].className.replace(" active", "");
//           this.className += " active";
//       });
//   }
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('responsive')
	mainnav.classList.contains('responsive') ? hambutton.innerHTML = '&#10005;' : hambutton.innerHTML = '&#9776;';
}, false);

window.onresize = () => {
	if (window.innerWidth > 760) {
		mainnav.classList.remove('responsive');
		hambutton.innterHTML = '&#9776;';
	}
};

let d = new Date();
document.querySelector('#theyear').textContent= d.getFullYear();

const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.textContent = fulldate;

if (now.getDay() == 5) { 
	document.querySelector('aside').style.display = 'block';}


let dateElement = document.querySelector("#date-line");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function formatDate(date) {
	let hours = date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	let dayIndex = date.getDay();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[dayIndex];

	return `${day}, ${hours}:${minutes}`;
}

function showDataSearch(response) {
	console.log(response);
	let tempNow = Math.round(response.data.main.temp);
	let tempInSearCity = document.querySelector(".temp");
	tempInSearCity.innerHTML = `${tempNow}`;
	let status = document.querySelector("#status");
	status.innerHTML = response.data.weather[0].main;
	let windRound = Math.round(response.data.wind.speed);
	let wind = document.querySelector("#wind");
	wind.innerHTML = `${windRound}`;
	let humidity = document.querySelector("#humidity");
	humidity.innerHTML = response.data.main.humidity;
	let currentSearchNow = document.querySelector("#city");
	currentSearchNow.innerHTML = response.data.name;
}

function citySearch(event) {
	event.preventDefault();
	let cityElement = document.querySelector("#city");
	let cityInput = document.querySelector("#city-form");

	let currentSearch = cityInput.value;
	let apiKey = "b49d82001928d724760116e9d064ee37";
	let units = "metric";
	let apiUrlNow = `https://api.openweathermap.org/data/2.5/weather?q=${currentSearch}&appid=${apiKey}&units=${units}`;
	console.log(apiUrlNow);

	axios.get(apiUrlNow).then(showDataSearch);
}

let city = document.querySelector("#nav-search");
city.addEventListener("submit", citySearch);

function showYourLocationData(response) {
	console.log(response);
	let tempLocNow = Math.round(response.data.main.temp);
	let tempInLocCity = document.querySelector(".temp");
	tempInLocCity.innerHTML = `${tempLocNow}`;
	let statusLoc = document.querySelector("#status");
	statusLoc.innerHTML = response.data.weather[0].main;
	let windRoundLoc = Math.round(response.data.wind.speed);
	let windLoc = document.querySelector("#wind");
	windLoc.innerHTML = `${windRoundLoc}`;
	let humidityLoc = document.querySelector("#humidity");
	humidityLoc.innerHTML = response.data.main.humidity;
	let cityLoc = document.querySelector("#city");
	cityLoc.innerHTML = response.data.name;
}

function showCurrentLocatio(position) {
	console.log(position.coords.latitude);
	console.log(position.coords.longitude);
	let latitide = position.coords.latitude;
	let longitude = position.coords.longitude;
	let units = "metric";
	let apiKey = "b49d82001928d724760116e9d064ee37";
	let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
	let apiUrlNow = `${apiEndPoint}?lat=${latitide}&lon=${longitude}&appid=${apiKey}&units=${units}`;
	console.log(apiUrlNow);

	axios.get(apiUrlNow).then(showYourLocationData);
}

function getCurrentLocation() {
	navigator.geolocation.getCurrentPosition(showCurrentLocatio);
}

let button = document.querySelector(".button-current");
button.addEventListener("click", getCurrentLocation);

function showCityLviv(response) {
	let cityOne = document.querySelector(".city-search");
	cityOne.value = "Lviv";

	const element = document.querySelector(".button-search");
	element.click();
}

let cityLviv = document.querySelector(".city-1");
cityLviv.addEventListener("click", showCityLviv);

function showCityKyiv(response) {
	let cityTwo = document.querySelector(".city-search");
	cityTwo.value = "Kyiv";

	const element = document.querySelector(".button-search");
	element.click();
}

let cityKyiv = document.querySelector(".city-2");
cityKyiv.addEventListener("click", showCityKyiv);

function showCityDnipro(response) {
	let cityTwo = document.querySelector(".city-search");
	cityTwo.value = "Dnipro";

	const element = document.querySelector(".button-search");
	element.click();
}

let cityDnipro = document.querySelector(".city-3");
cityDnipro.addEventListener("click", showCityDnipro);

function showCityKharkiv(response) {
	let cityTwo = document.querySelector(".city-search");
	cityTwo.value = "Kharkiv";

	const element = document.querySelector(".button-search");
	element.click();
}

let cityKharkiv = document.querySelector(".city-4");
cityKharkiv.addEventListener("click", showCityKharkiv);

function showCityOdesa(response) {
	let cityTwo = document.querySelector(".city-search");
	cityTwo.value = "Odesa";

	const element = document.querySelector(".button-search");
	element.click();
}

let cityOdesa = document.querySelector(".city-5");
cityOdesa.addEventListener("click", showCityOdesa);

function showCityKherson(response) {
	let cityTwo = document.querySelector(".city-search");
	cityTwo.value = "Kherson";

	const element = document.querySelector(".button-search");
	element.click();
}

let cityKherson = document.querySelector(".city-6");
cityKherson.addEventListener("click", showCityKherson);

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

function formatDay(timestamp) {
	let dateDays = new Date(timestamp * 1000);
	let dayForecast = dateDays.getDay();
	let daysArrey = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return daysArrey[dayForecast];
}

function displayForecastDate(response) {
	let forecastWeather = response.data.daily;
	let forecastElement = document.querySelector("#forecast-desk");

	let forecastHTML = "";

	forecastWeather.forEach(function (forecastDay, index) {
		if (index < 4) {
			forecastHTML =
				forecastHTML +
				`
		<div class="col day">
			${formatDay(forecastDay.dt)} <br />
			<br />
			<img
			src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
			width="55"
			/>
			<br />
			<br />
			<span class="max-temp"> ${Math.round(forecastDay.temp.max)} °C </span>
			<br />
			<br />
			<span class="min-temp"> ${Math.round(forecastDay.temp.min)} °C </span>
		</div>
	`;
		}
	});

	forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
	console.log(coordinates);
	let apiKey1 = "b49d82001928d724760116e9d064ee37";
	let apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey1}&units=metric`;
	axios.get(apiUrl1).then(displayForecastDate);
}

function alertNull() {
	let cityAlert = document.querySelector("#city-form");
	let cityAlertMes = cityAlert.value;
	if (cityAlertMes === "") {
		alert("Oops! It seems that you forgot to type your city's name 😢");
	}
}

let buttonS = document.querySelector(".button-search");
buttonS.addEventListener("click", alertNull);

function showDataSearch(response) {
	console.log(response);
	let tempNow = Math.round(response.data.main.temp);
	let tempInSearCity = document.querySelector(".temp");
	tempInSearCity.innerHTML = `${tempNow}`;
	let status = document.querySelector("#status");
	status.innerHTML = response.data.weather[0].description;
	let windRound = Math.round(response.data.wind.speed);
	let wind = document.querySelector("#wind");
	wind.innerHTML = `${windRound}`;
	let humidity = document.querySelector("#humidity");
	humidity.innerHTML = response.data.main.humidity;
	let currentSearchNow = document.querySelector(".current-city");
	currentSearchNow.innerHTML = response.data.name;
	let iconElement = document.querySelector("#icon");
	iconElement.setAttribute(
		"src",
		`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	);
	iconElement.setAttribute("alt", response.data.weather[0].description);

	getForecast(response.data.coord);
}

function citySearch(event) {
	event.preventDefault();
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
	let tempLocNowF = (response.data.main.temp * 9) / 5 + 32;
	let tempInLocCityF = document.querySelector("#currTemp");
	tempInLocCityF.innerHTML = `${tempLocNowF}`;
	let statusLoc = document.querySelector("#status");
	statusLoc.innerHTML = response.data.weather[0].description;
	let windRoundLoc = Math.round(response.data.wind.speed);
	let windLoc = document.querySelector("#wind");
	windLoc.innerHTML = `${windRoundLoc}`;
	let humidityLoc = document.querySelector("#humidity");
	humidityLoc.innerHTML = response.data.main.humidity;
	let cityLoc = document.querySelector(".current-city");
	cityLoc.innerHTML = response.data.name;
	let iconElementNow = document.querySelector("#icon");
	iconElementNow.setAttribute(
		"src",
		`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	);
	iconElementNow.setAttribute("alt", response.data.weather[0].description);
	celsiusTemp = tempLocNow;

	getForecast(response.data.coord);
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

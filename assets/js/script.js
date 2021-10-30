const weatherApiKey = "f30c1233b7aae64d3da195c878397810";

document.querySelector("button").addEventListener("click", getWeather);

function getWeather() {
    //get the city name from the user from input box
    const city = document.querySelector("input").value;
    //make the API request from openweather API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=imperial`;
    fetch(url)
        //unpack the JSON
        .then(res => res.json())
        //send the JSON to our output function
        .then(displayWeather);
}
function displayWeather(data) {
   
    const icon = data.weather[0].icon;

    document.querySelector("output").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
}
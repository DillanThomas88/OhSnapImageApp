const playlistContainer = document.querySelector('#playlist-container')
const unsplashAPIKey = "QxYTrwYF42QoIJwscz21RwYQ6dVoUTJJOM_ChqhDXVI";
const numberOfImages = 30;
const imageSize = "regular"; //options are "raw", "full", "regular", "small", "thumb"

var time = document.querySelector('#time')

var randomWeatherIndex = 'colors'
var randomTimeIndex = 'epic'
const keyWords = {
    clear: [
        'sunny',
        'happy',
        'good vibes',
        'summer',
        'beachy',
        'waves',
        'beach',
        'energetic',
        'warm',
        'tanning',
        'summertime',
    ],
    haze: [
        'haze',
    ],
    clouds: [
        'cloudy',
        'slow',
        'sad',
        'clouds',
        'cozy',
        'misty',
        'coffee',
        'chill',
        'relaxed',
        'subdued',
    ],
    fog: [
        'overcast',
        'melancholy',
        'depression',
        'cloudy',
        'looming',
        'dark',
        'foggy',
        'hazy',
        'fog',
    ],
    dust: [
        'dust',
    ],
    drizzle: [
        'rain',
        'love',
        'comfort',
        'fresh',
        'raindrops',
        'rain shower',
        'splash',
        'rainy',
        'umbrella',
        'puddles',
        'raincoat',
    ],
    snow: [
        'snow',
        'cold',
        'freezing',
        'frigid',
        'snowy',
        'winter',
        'frozen',
        'snowy mountains',
        'ice',
        
    ],
    thunderstorm: [
        'lightning',
        'thunder',
    ],
    morning: [
        'wide',
        'rising',
        'new',
        'clean',
    ],
    midDay: [
        'bright',
        'contrast',
        'colorful',
        'energetic'
    ],
    evening: [
        'ease',
        'therapeutic',
        'home',
        'healing',
        'sundown',
        'sunset',
        'chill',
        'relax',
        'golden hour'
    ],
    night: [
        'night',
        'quiet',
        'soft',
        'melody',
        'chill',
        'lucid',
        'dark',
        'lullaby',
        'sleep',
        'dreamy',
        'fuzzy',
    ],
    
}

// Functions/APIs---------------------------------------------------

// UnsplashAPI------------------------------------------------------
UpdateTime()
function UpdateTime(){
    time.textContent = moment().format('hh:mma')
    document.querySelectorAll('img').style = 'opacity: 0.1'
    var t = setInterval(function(){
        clearInterval(t)
        UpdateTime()
    },10)
}
//get images
async function getImagesFromKeyword(keyword) {
	const url = `https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}&count=${numberOfImages}&query=${keyword}`;
	const response = await fetch(url);
	const json = await response.json();
	const images = json.map(image => `<img src="${image.urls[imageSize]}" />`);
	return images.join("");
}

async function showImagesFromKeyword(cssSelector, keyword) {
	const imageResults = await getImagesFromKeyword(keyword);
	document.querySelector(cssSelector).innerHTML = imageResults;
}


// Search-Perameter-logic--------------------------------------
function FetchAndSetPlaylists(weatherType, timeOfDay) {
    var weatherWeightPercentage = 75

    // gets random 'weather' related keyword
    if (weatherType == 'clear') {
        randomWeatherIndex = keyWords.clear[Math.floor(Math.random() * keyWords.clear.length)]
    } else if (weatherType == 'clouds') {
        randomWeatherIndex = keyWords.clouds[Math.floor(Math.random() * keyWords.clouds.length)]
    } else if (weatherType == 'fog') {
        randomWeatherIndex = keyWords.fog[Math.floor(Math.random() * keyWords.fog.length)]
    } else if (weatherType == 'rain' || weatherType == 'drizzle') {
        randomWeatherIndex = keyWords.drizzle[Math.floor(Math.random() * keyWords.drizzle.length)]
    } else if (weatherType == 'snow') {
        randomWeatherIndex = keyWords.snow[Math.floor(Math.random() * keyWords.snow.length)]
    } else if (weatherType == 'thunderstorm') {
        randomWeatherIndex = keyWords.thunderstorm[Math.floor(Math.random() * keyWords.thunderstorm.length)]
    } else if (weatherType == 'haze') {
        randomWeatherIndex = keyWords.haze[Math.floor(Math.random() * keyWords.haze.length)]
    } else if (weatherType == 'dust') {
        randomWeatherIndex = keyWords.dust[Math.floor(Math.random() * keyWords.dust.length)]
    }
    

    // gets random 'time of day' related keyword
    if (timeOfDay >= 6 && timeOfDay < 11) {
        randomTimeIndex = keyWords.morning[Math.floor(Math.random() * keyWords.morning.length)]
    } else if (timeOfDay >= 11 && timeOfDay < 16) {
        randomTimeIndex = keyWords.midDay[Math.floor(Math.random() * keyWords.midDay.length)]
    } else if (timeOfDay >= 16 && timeOfDay < 22) {
        randomTimeIndex = keyWords.evening[Math.floor(Math.random() * keyWords.evening.length)]
    } else if (timeOfDay >= 22 || timeOfDay < 6) {
        randomTimeIndex = keyWords.night[Math.floor(Math.random() * keyWords.night.length)]
    }

    // passes search params to unplashAPI function + html append
    showImagesFromKeyword("#playlist-container", randomWeatherIndex + " " + randomTimeIndex);
    console.log(randomWeatherIndex + " " + randomTimeIndex)
}



// OpenWeatherAPI--------------------------------------
const app = {
  init: () => {
    document
    .getElementById('btnGet')
    .addEventListener('click', app.fetchWeather);
    document
    .getElementById('svgs')
    addEventListener('click', FetchAndSetPlaylists(randomWeatherIndex, randomTimeIndex))
  },
  fetchWeather: (ev) => {
    //use the input value to grab the city name
    var city = document.querySelector('#inputField').value
    if(city == ''){return}
    let key = 'bf7390e04b879494aa1ec79d4a3b6552'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    //fetch the cities weather
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
          //fetch the weather description for logic chain
        var weatherDescription = data.weather[0].main.toLowerCase();
        console.log(data)
        var time = moment().format('HH')
        FetchAndSetPlaylists(weatherDescription, time)
        console.log(weatherDescription, time)
      })
      .catch(console.err);
  },
  wtf: (err) => {
    //geolocation failed
    console.error(err);
  },
}
app.init()
const playlistContainer = document.querySelector('#playlist-container')
const unsplashAPIKey = "QxYTrwYF42QoIJwscz21RwYQ6dVoUTJJOM_ChqhDXVI";
const numberOfImages = 30;
const imageSize = "regular"; //options are "raw", "full", "regular", "small", "thumb"
var imagecontainer = ''
var time = document.querySelector('#time')

// start operations
CheckImages()

function RemovePlayerData(){
    imagecontainer = ''
    var data = document.querySelectorAll('.artist-data')
    data.forEach(element => {
        element.remove()        
    });
    imageData.imgLink = []
    imageData.name = []
    imageData.profileLink = []
    imageData.bio = []
    CheckImages()
    
}


// stores all temporary html fetch data
var imageData = {
    imgLink: [],
    name: [],
    profileLink: [],
    bio: [],
    unsplashlink: 'https://unsplash.com/',
}

// continually check for fetched images - if found, then stop updating and run next function
function CheckImages(){
    var time = setInterval(function(){
        if(imagecontainer == ''){clearInterval(time);CheckImages(); return }
        else{ GetHTMLLinks(imagecontainer); clearInterval(time);}
    },1)
}

// grab all fetched https URLs
function GetHTMLLinks(image) {
    var string = image.toString()
    var tempArray = string.split('"')
    for (let i = 0; i < tempArray.length; i++) {
        const element = tempArray[i];
        if(i%2 != 0){imageData.imgLink.push(element)}
    }
    AppendImages(imageData.imgLink)
}

// append to the page
function AppendImages(objectArray){
    var container = document.querySelector('#playlist-container')
    objectArray.forEach(element => {
        var div = document.createElement('div')     
        var img = document.createElement('img')
        div.classList.add('artist-data')
        img.setAttribute('src', element)
        img.setAttribute('alt','temporary description')
        img.addEventListener('click', ArtistCard)
        div.append(img)
        container.append(div)
    });
    console.log(imageData)
}

function ArtistCard(e){
    var target = e.target
    target.style.filter = 'blur(5px)'
}



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
function UpdateTime() {
    time.textContent = moment().format('hh:mma')
    document.querySelectorAll('img').style = 'opacity: 0.1'
    var t = setInterval(function () {
        clearInterval(t)
        UpdateTime()
    }, 1000)
}
//get images
async function getImagesFromKeyword(keyword) {
    const url = `https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}&count=${numberOfImages}&query=${keyword}`;
    const response = await fetch(url);
    const json = await response.json();
    const images = json.map(image => `<img src="${image.urls[imageSize]}" />`);
    imageData.name = json.map(image => `${image.user['name']}`);
    imageData.profileLink = json.map(image => `${image.user.links.html}`);
    imageData.bio = json.map(image => `${image.user.bio}`);

    return images.join("");
}

async function showImagesFromKeyword(container, keyword) {
    const imageResults = await getImagesFromKeyword(keyword);
    imagecontainer = imageResults
    // var div = document.createElement('div')
    // console.log(imageResults.querySelector('img').innerHTML)
    // document.querySelector(container).innerHTML = imageResults;
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
        RemovePlayerData()
        //use the input value to grab the city name
        var city = document.querySelector('#inputField').value
        if (city == '') { return }
        let key = 'bf7390e04b879494aa1ec79d4a3b6552'
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        //fetch the cities weather
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                //fetch the weather description for logic chain
                var weatherDescription = data.weather[0].main.toLowerCase();
                // console.log(data)
                var time = moment().format('HH')
                FetchAndSetPlaylists(weatherDescription, time)
                // console.log(weatherDescription, time)
            })
            .catch(console.err);
    },
    wtf: (err) => {
        //geolocation failed
        console.error(err);
    },
}


app.init()
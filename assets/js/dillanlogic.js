const playlistContainer = document.querySelector('#playlist-container')

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

// FetchAndSetPlaylists('rain', 8)


function FetchAndSetPlaylists(weatherType, timeOfDay) {

    // generate a number of random playlists based on weathertype & timeofday

    var randomWeatherIndex
    var randomTimeIndex
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

    // creates element with obtained playlist info and append
    showImagesFromKeyword("#playlist-container", randomWeatherIndex + " " + randomTimeIndex);
    console.log(randomWeatherIndex + " " + randomTimeIndex)

}



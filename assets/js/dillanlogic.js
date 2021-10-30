const playlistContainer = document.querySelector('#playlist-container')

const keyWords = {
    sunny: [
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
    cloudy: [
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
    overcast: [
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
    rain: [
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
        'sweater',
        'freezing',
        'frigid',
        'snowy',
        'winter',
        'frozen',
        'mountains',
    ],
    morning: [
        'morning',
        'fresh',
        'sunrise',
        'dawn',
        'rise',
        'dew',
        'new',
        'coffee',
        'breakfast',
    ],
    midDay: [
        'noon',
        'work',
        'pumped up',
        'working hard',
        'lunch',
        'sunny',
        'sun',
        'sweaty',
        'heat',
        'break',
    ],
    evening: [
        'ease',
        'therapeutic',
        'home',
        'healing',
        'sundown',
        'sunset',
        'chill',
        'success',
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
        'midnight',
        'dark',
        'sleepy',
        'fireplace',
        'bedtime',
        'sleep',
        'sleepytime',
        'lullaby',
        'sleep',
        'pillow',
        'dreamy',
    ],

}

FetchAndSetPlaylists('rain', 8)


function FetchAndSetPlaylists(weatherType, timeOfDay) {

    // generate a number of random playlists based on weathertype & timeofday

    var randomWeatherIndex
    var randomTimeIndex
    var weatherWeightPercentage = 75

    // gets random 'weather' related keyword
    if (weatherType == 'sunny') {
        randomWeatherIndex = keyWords.sunny[Math.floor(Math.random() * keyWords.sunny.length)]
    } else if (weatherType == 'cloudy' || weatherType == 'partialy cloudy') {
        randomWeatherIndex = keyWords.cloudy[Math.floor(Math.random() * keyWords.cloudy.length)]
    } else if (weatherType == 'overcast') {
        randomWeatherIndex = keyWords.overcast[Math.floor(Math.random() * keyWords.overcast.length)]
    } else if (weatherType == 'rain') {
        randomWeatherIndex = keyWords.rain[Math.floor(Math.random() * keyWords.rain.length)]
    } else if (weatherType == 'snow') {
        randomWeatherIndex = keyWords.snow[Math.floor(Math.random() * keyWords.snow.length)]
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



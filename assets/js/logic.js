const playlistContainer = document.querySelector('#playlist-container')

const keyWords = {
    sunny: [
        'sunny',
        'happy',
        'good vibes',
        'summer',
        'beachy',
    ],
    cloudy: [
        'cloudy',
        'slow',
        'sad',
    ],
    overcast: [
        'overcast',
        'depression',
        'not well',
        'not fair',
        'dark',
        'foggy',
    ],
    rain: [
        'rain',
        'love',
        'comfort',
        'fresh',
    ],
    snow: [
        'snow',
        'cold',
        'sweater',
        'livingroom',
    ],
    morning: [
        'morning',
        'fresh',
        'sunrise',
        'dawn',
    ],
    midDay: [
        'noon',
        'pumped up',
        'working hard',
        'lunch',
    ],
    evening: [
        'ease',
        'therapeutic',
        'home',
        'chill',
        'success',
        'relax',
    ],
    night: [
        'night',
        'quiet',
        'soft',
        'melody',
        'chill',
        'lucid',
    ],

}

function FetchAndSetPlaylists(weatherType, timeOfDay) {

    // generate a number of random playlists based on weathertype & timeofday
    for (let i = 0; i < 15; i++) {

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
        var playlist = document.createElement('div')
        playlist.classList.add('playlist', 'container', 'is-flex', 'is-justify-content-center', 'is-one-third-mobile', 'has-background-primary')
        if(Math.floor(Math.random()* 100 > weatherWeightPercentage)){playlist.textContent = randomTimeIndex}
        else{ playlist.textContent = randomWeatherIndex}
        playlistContainer.append(playlist)
    }
}
FetchAndSetPlaylists('rain', 8)

  


const app = {
  init: () => {
    document
    .getElementById('btnGet')
    .addEventListener('click', app.fetchWeather);
    // document
    //   .getElementById('btnCurrent')
    //   .addEventListener('click', app.getLocation);
  },
  fetchWeather: (ev) => {
    //use the values from latitude and longitude to fetch the weather
    var city = document.querySelector('#inputField').value
    let key = 'bf7390e04b879494aa1ec79d4a3b6552'
    let lang = 'en';
    // let url = `http://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${key}&lang=${lang}`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    //fetch the weather
    fetch(url)
      .then((resp) => {
        // if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        app.showWeather(data);
      })
      .catch(console.err);
  },
  getLocation: (ev) => {
    let opts = {
      enableHighAccuracy: true,
      timeout: 1000 * 10, //10 seconds
      maximumAge: 1000 * 60 * 5, //5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  ftw: (position) => {
    //got position
    document.getElementById('latitude').value =
      position.coords.latitude.toFixed(2);
    document.getElementById('longitude').value =
      position.coords.longitude.toFixed(2);
  },
  wtf: (err) => {
    //geolocation failed
    console.error(err);
  },
  showWeather: (resp) => {
    console.log(resp);
    let row = document.querySelector('.weather.row');
}
}
app.init()
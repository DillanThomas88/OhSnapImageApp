var input = document.querySelector('#searchbutton');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var city= "oceanside"

button.addEventListener("click",Search)
function Search(){fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=5111c08a5cbc67daecfe6df904cc18a7')
.then(response => response.json())
.then(data => {
   
    var descValue = data['weather'][0]['description'];

    main.innerHTML = nameValue;
    desc.innerHTML = "Desc - " + descValue;
    temp.innerHTML = "Temp - " + tempValue;
    input.value = "";
    console.log (data)

})}

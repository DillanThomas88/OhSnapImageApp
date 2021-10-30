/* DO NOT TOUCH!!! ********************/

//settings
const unsplashAPIKey = "QxYTrwYF42QoIJwscz21RwYQ6dVoUTJJOM_ChqhDXVI";
const numberOfImages = 30;
const imageSize = "thumb"; //options are "raw", "full", "regular", "small", "thumb"

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
//
/**************************************/
// showImagesFromKeyword("main" , "rain");



/* how to use:
	-- decide where images will go via its CSS selector (# for id, . (dot) for class, tag name, etc.)
	-- decide (or look up) keyword as a string
	-- call showImagesFromKeyword(cssSelector, keyword);
*/


//const keyword = weatherdata.weather[0].description;
//showImagesFromKeyword("div.images-go-here", keyword);

//<div class="images-go-here"></div>

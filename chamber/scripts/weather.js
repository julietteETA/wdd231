//Select html element
const myTown = document.querySelector("#myTown")
const myDescription = document.querySelector("#myDescription");
const myTemperature = document.querySelector("#myTemperature");
const myGraphic = document.querySelector("#myGraphic");

//Create required variables for the url
const myKey = "d38074b29ffbfb2ac4b6825f19e4f0a4";
const myLat = "-4.412745697431147";
const myLong = "15.268743837589717";
//Construct a full path literal
const myURL = "https://api.openweathermap.org/data/2.5/weather?lat={mylat}&lon={myLong}&appid={myKey}&units=imperial";

//Try to grab the current weather data
try {
    const response = await fetch(myURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data); //testing only
        //displayResults(data);//uncomment when ready
    } else {
        throw Error(await response.text());
    }
 } catch (error) {
    console.log(error);
}

//Display the Json dta into the web page
function displayResults(data) {
    console.log("hello!")
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].Description
    myTemperature.innerHTML = `${data.main.tempera}&deg;F`
    const iconSrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute("SRC", iconSrc)
    myGraphic.setAttribute("alt", data.weather[0].description)

    
}
//START THE PROCESS
apiFetch();


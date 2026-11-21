//Select html element
const myTown = document.querySelector("#myTown");
const myDescription = document.querySelector("#myDescription");
const myTemperature = document.querySelector("#myTemperature");
const myGraphic = document.querySelector("#myGraphic");

//Create required variables for the url
const myKey = "81f9f02bc2d697834d24bfa597ad2939";
const myLat = "-4.412745697431147";
const myLong = "15.268743837589717";
//Construct a full path literal
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat={myLat}&lon={myLong}&appid={myKey}`;

//Try to grab the current weather data
async function apiFetch() {

} {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//Display the Json dta into the web page
function displayResults(data) {

    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconSrc = `https://openweathermap.org{data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute("src", iconSrc);
    myGraphic.setAttribute("alt", data.weather[0].description);


}
//START THE PROCESS
apiFetch();


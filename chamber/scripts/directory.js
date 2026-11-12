// Get dynamic date in the footer tag

document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Inject the year into the span element
    document.getElementById("currentyear").textContent = year;

    // Inject the last modified date into the paragraph element
    document.getElementById("lastmodified").textContent = `Last modification: ${document.lastModified}`;
});
// Apply a responsive humburger effect to your existing navigation menu using Javascript

const nav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");


hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});
// Using a Json and fetch method and json data
const doc = "members.json";
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets);
}


//Select the container element
const container = document.getElementById("image");

// Loop through the array and create "business cards" for each business by displaying:
function displayBusinesses(businesses) {
    container.innerHTML = "";
    businesses.forEach(business =>
    // Create card container
    {
        const cardFiltered = document.createElement("div");
        //Add a style
        cardFiltered.style.backgroundColor = "#f0ebeb";

        cardFiltered.innerHTML = `
            <h3>${business.businessName}</h3>
            <h4>${business.businessTagLine}</h4>
            
    
            <p><strong>Email:</strong> ${business.email}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <p><strong>URL:</strong> ${business.url} sq ft</p>
            <img src="${business.imageUrl}" alt="${business.businessName}" loading="lazy" >;
            `;
        cardFiltered.style.float = "left"
    
        container.appendChild(cardFiltered);


    });
}



// grid – display all the businesses as a grid
document.querySelector("#grid").addEventListener("click", () => { displayBusinesses (businesses);
    displayBusinesses(businesses);
});



// list– displays all the businesses as a list.
document.querySelector("#home").addEventListener("click", () => displayBusinesses(businesses));
displayBusinesses(businesses);


//Extra : An other to loop through the array
//temples.forEach((temple) => {
// const card = document.createElement("div")
// card.classList.add("temple-card");
//const nameHeading = document.createElement("h2");
// nameHeading.textContent = `${temple.templeName}`;



//const locationTemple = document.createElement("p");
//locationTemple.textContent = `Location: ${temple.location}`;




//const dateDedication = document.createElement("p");
//dateDedication.textContent = `Dedicated: ${temple.dedicated} `;



//const areaTemple = document.createElement("p");
//areaTemple.textContent = `Area: ${temple.area} sq meters`;



//const img = document.createElement("img");
//img.src = temple.imageUrl;
//img.alt = temple.name;
//img.loading = "lazy";

// Append the card to the main page container
//card.appendChild(nameHeading);
//card.appendChild(locationTemple);
//card.appendChild(dateDedication);
//card.appendChild(areaTemple);
//card.appendChild(img);
// Append the card to the main page container
//container.appendChild(card);

//})

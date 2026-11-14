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
const url = "https://julietteeta.github.io/wdd231/chamber/data/members.json";
const container = document.querySelector('#image');
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    //display grid by default
    membersData =data.members
    displayMembers(membersData);
}



// 1. GRID VIEW: Shows full cards with images and details
//Select the container element
const gridBtn = document.querySelector('#grid');
const displayMembers = (members) => {
    
    container.innerHTML = ""; // Clear container
    container.classList.add('grid');
    container.classList.remove('list');


    members.forEach((member) => {
        const cardFiltered = document.createElement("div");
        cardFiltered.classList.add("member-card");
        //Add a style
        cardFiltered.style.backgroundColor = "#f0ebeb";
        const memberUrl = member.url || member[" url"] || "";
        cardFiltered.innerHTML = `
            <img src="${member.imageUrl}" alt="${member.businessName} logo " loading="lazy" width = "5" height ="5">
            <div class ="design">
      
                <h2>${member.businessName}</h2>
                <p>${member.businessTagLine}</p>
            
        
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <a class="company-url" href="https://${memberUrl}" target="_blank">${memberUrl}</a>
                <p><strong>Level:</strong> ${member.membershipLevel}</p>
            </div>
           
            `;
            

        container.appendChild(cardFiltered);
        


    });

}

    ;
getMembers();


//Grid and list button 


const listBtn = document.querySelector('#list'); 





// 2. LIST VIEW: Looks like a table with Company Name, URL, and Phone Number
const displayList = (members) => {
    container.innerHTML = ""; // Clear container
    container.classList.add('list');
    container.classList.remove('grid');

    // Create Table Header
    const headerRow = document.createElement("div");
    headerRow.classList.add("table-header");
    headerRow.innerHTML = `
        <span>Company Name</span>
        <span>URL</span>
        <span>Phone Number</span>
    `;
    container.appendChild(headerRow);

    // Create Table Rows
    members.forEach((member) => {
        const row = document.createElement("div");
        row.classList.add("table-row");

        const memberUrl = member.url || member[" url"] || "";

        row.innerHTML = `
            <span class="company-name">${member.businessName}</span>
            <a class="company-url" href="https://${memberUrl}" target="_blank">${memberUrl}</a>
            <span class="company-phone">${member.phone}</span>
        `;

        container.appendChild(row);
    });
};

// Button Click Listeners
gridBtn.addEventListener('click', () => displayMembers(membersData));
listBtn.addEventListener('click', () => displayList(membersData));

// Load data
getMembers();

//HOME


const spotLightContainer = document.querySelector("#card");
const spotLightButton = document.querySelector("#spot");
//fetch for asynchronous 
async function getSpotLight() {
    const response = await fetch(url);
    const view = await response.json();
    //display grid by default
    const data = view.members;
    displaySpotLights(data);


    // Filter data
    const filterMembers = view.members.filter(member => member.membershipLevel ===" 2" || member.membershipLevel === "3");
    //display spotlight
    displaySpotLights(filterMembers);
}

const displaySpotLights = () => {
    spotLightContainer.innerHTML = "";
    members.forEach((member) => {
        const view = document.createElement("div");
        // Convert the silver end golden to a more styled way
        const membershipLabel = member.membershipLevel === "3" ? "🌟🌟🌟" : "🌟🌟";

        view.innerHTML = `
            <h3>${member.businessName}</h3>
            <p class="tagline">${member.businessTagLine}</p>
            <img src="${member.imageUrl}" alt="${member.businessName} Logo" loading="lazy" width="120" height="120">
            <div class="spotlight-details">
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.email} </p>
                <p><strong>Website:</strong> ${member.memberUrl} </p>
                <p class="level"><strong>Level:</strong> ${membershipLabel}</p>
            </div>
        `;
        spotLightContainer.append(view);

    });

};
getSpotLight();

if (spotlightButton) {
    spotlightButton.addEventListener('click', getSpotlights);
};
getSpotLight();



 
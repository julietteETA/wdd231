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
    //console.table(data.members); // temporary testing of data response
    displayMembers(data.members);
}


//Select the container element
const displayMembers = (members) => { members.forEach((member) =>{
    const cardFiltered = document.createElement("div");
        //Add a style
        cardFiltered.style.backgroundColor = "#f0ebeb";

    cardFiltered.innerHTML = `
      
            <h3>${member.businessName}</h3>
            <p>${member.businessTagLine}</p>
           
    
            <p><strong>Email:</strong> ${member.email}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>URL:</strong> ${member.url}</p>
            <p><strong>Level:</strong> ${member.membershipLevel}</p>
            <img src="${member.imageUrl}" alt="${member.businessName } logo " loading="lazy" >
            `;
        
        container.appendChild(cardFiltered);


});
    
}
getMembers();

//Grid and list button 
//Grid button 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
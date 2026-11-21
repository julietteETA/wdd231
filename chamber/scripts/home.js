//HOME
const spotBtn = document.querySelector('#spot');
const displaySpotLight = (members) => {

    container.innerHTML = ""; // Clear container
    container.classList.add('spotlight');
    container.classList.remove('grid');
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

// Grab the query string from the URL
const currentUrl = window.location.href;
const everything = currentUrl.split('?');

// Ensure there are parameters in the URL before processing
if (everything.length > 1) {
    let formData = everything[1].split('&');

    function show(cup) {
        let result = "";
        formData.forEach((element) => {
            if (element.startsWith(cup + "=")) {
                // Decode URI components (replaces %40 with @, + with spaces, etc.)
                result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
            }
        });
        return result;
    }

    // Inject the required fields into the #results container
    // IMPORTANT: Make sure the strings inside show('') match the 'name' attributes in your form HTML
    const showInfo = document.querySelector('#results');
    showInfo.innerHTML = `
        <p><strong>First Name:</strong> ${show("firstName")}</p>
        <p><strong>Last Name:</strong> ${show("lastName")}</p>
        <p><strong>Email Address:</strong> ${show("emailAddress")}</p>
        <p><strong>Mobile Phone:</strong> ${show("mobilePhoneNumber")}</p>
        <p><strong>Business/Organization Name:</strong> ${show("organization'sName")}</p>
        <p><strong>Membership Level:</strong> ${show("membershipLevel")}</p>
        <p><strong>Submission Timestamp:</strong> ${show("timestamp")}</p>
    `;
}


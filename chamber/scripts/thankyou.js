
const currentUrl = new URLSearchParams(window.location.href);
const everything = currentUrl.split('?');
if (everything.length > 1) {
    let formData = everything[1].split('&');

    function show(cup) {
        let result = "";
        formData.forEach((element) => {
            if (element.startsWith(cup + "=")) {
                result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
            }
        });
        return result;
    }
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


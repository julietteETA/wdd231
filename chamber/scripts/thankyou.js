
const params = new URLSearchParams(window.location.search);
const show = (key) => params.get(key) || '';
const showInfo = document.querySelector('#results');
if (showInfo){
     if (params.toString()) {
    showInfo.innerHTML = `
        <p><strong>First Name:</strong> ${show("firstName")}</p>
        <p><strong>Last Name:</strong> ${show("lastName")}</p>
        <p><strong>Email Address:</strong> ${show("emailAddress")}</p>
        <p><strong>Mobile Phone:</strong> ${show("mobilePhoneNumber")}</p>
        <p><strong>Business/Organization Name:</strong> ${show("organization'sName")}</p>
        <p><strong>Membership Level:</strong> ${show("membershipLevel")}</p>
        <p><strong>Submission Timestamp:</strong> ${show("timestamp")}</p>
    `;
     } else {
             showInfo.innerHTML = `<p>No submission data found. Please fill out the <a href="join.html">application form</a> first.</p>`;
         }

   
    }

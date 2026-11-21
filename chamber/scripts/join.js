// Set the hidden timestamp input value to the current date and time upon page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = new Date().toLocaleString();

});


// Open modal when a card link is clicked
document.querySelectorAll(".modal-link").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent page jump
        const modalId = link.getAttribute("data-modal");
        document.getElementById(modalId).showModal();
    });
});

// Close modal when the Close button is clicked
document.querySelectorAll(".close-btn").forEach((button) => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});
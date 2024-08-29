function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: 'smooth' });
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted! Thank you for your message.");
});

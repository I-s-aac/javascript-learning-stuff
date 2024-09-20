document.getElementById('loginForm').addEventListener('submit', function(event) {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    let errors = [];

    // Email validation (simple regex for valid email pattern)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailField.value || !emailPattern.test(emailField.value)) {
        errors.push("Invalid email.");
    }

    // Password validation (using regex defined in the pattern attribute)
    const passwordPattern = new RegExp(passwordField.pattern);
    if (!passwordField.value || !passwordPattern.test(passwordField.value)) {
        errors.push("Invalid password.");
    }

    // If errors exist, prevent form submission and show alert
    if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        alert(errors.join(" ")); // Show all errors in a single alert
    }
});



const slideshowImage = document.getElementById("slideshowImage");
let slideshowImageIndex = 0;
const images = [
    "bread 1.JPG",
    "bread 2.jpg",
    "bread 3.jpg"
]

slideshowImage.src = images[slideshowImageIndex];

function switchLeft() {
    slideshowImageIndex -= 1;
    if (slideshowImageIndex < 0) {
        slideshowImageIndex = images.length - 1;
    }
    slideshowImage.style.opacity = 0;
    setTimeout(() => {
        slideshowImage.src = images[slideshowImageIndex];
        slideshowImage.style.opacity = 1;
    }, 250);
}

function switchRight() {
    slideshowImageIndex += 1;
    if (slideshowImageIndex >= images.length) {
        slideshowImageIndex = 0;
    }
    slideshowImage.style.opacity = 0;
    setTimeout(() => {
        slideshowImage.src = images[slideshowImageIndex];
        slideshowImage.style.opacity = 1;
    }, 250)
}

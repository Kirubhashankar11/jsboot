const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const teamContainer = document.querySelector(".team-container");

let currentScrollPosition = 0;

prevBtn.addEventListener("click", () => {
    currentScrollPosition -= teamContainer.offsetWidth;
    if (currentScrollPosition < 0) {
        currentScrollPosition = teamContainer.scrollWidth - teamContainer.offsetWidth;
    }
    teamContainer.scrollTo({
        left: currentScrollPosition,
        behavior: "smooth",
    });
});

nextBtn.addEventListener("click", () => {
    currentScrollPosition += teamContainer.offsetWidth;
    if (currentScrollPosition >= teamContainer.scrollWidth) {
        currentScrollPosition = 0;
    }
    teamContainer.scrollTo({
        left: currentScrollPosition,
        behavior: "smooth",
    });
});


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Login successful!");
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);

    alert("Registration successful!");
});

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const email = document.getElementById('email').value;
    const people = document.getElementById('people').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // Validate and process the form
    if (email && people && time && date) {
        alert(`Reservation confirmed for ${people} people on ${date} at ${time}.\nEmail: ${email}\nMessage: ${message || 'No message provided'}`);
        // You can add code here to send this data to a server via an API
    } else {
        alert('Please fill in all required fields.');
    }
});


// 
const triggerImage = document.getElementById('triggerImage');
const messageBox = document.getElementById('messageBox');
const closeButton = document.getElementById('closeButton');

// Show the message box when the image is clicked
triggerImage.addEventListener('click', () => {
    messageBox.style.display = 'block';
});

// Close the message box when the close button is clicked
closeButton.addEventListener('click', () => {
    messageBox.style.display = 'none';
});
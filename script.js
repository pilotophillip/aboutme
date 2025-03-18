// Select the form elements
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

// Add click event listener to submit button
submitButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    let emailValue = emailElement.value.trim();
    let messageValue = messageElement.value.trim();

    // Validate the email
    if (emailValue.includes('@') && emailValue.includes('.')) {
        // If valid, show a thank you message and reset the form fields
        alert('Thanks for your message! - Phillip');
        emailElement.value = "";
        messageElement.value = "";
    } else {
        // If invalid, show an error message
        alert('Please enter a valid email address.');
    }
});



document.addEventListener("DOMContentLoaded", () => {
    // Function to update the current time
    const updateTime = () => {
        document.getElementById("current-time").textContent = new Date().toLocaleTimeString();
    };

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Call once immediately after the page loads

    // Function to scroll to the top smoothly
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // Create and style the "Scroll to Top" button
    let btn = document.createElement("button");
    btn.textContent = "Top";
    btn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;background:#333;color:#fff;border:none;border-radius:5px;cursor:pointer;";
    btn.onclick = scrollToTop;
    document.body.appendChild(btn);

    // Select elements
    let emailElement = document.querySelector('#email');
    let messageElement = document.querySelector('#message');
    let submitButton = document.querySelector('#submit-button');

    // Add click event listener to submit button
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        let emailValue = emailElement.value.trim();
        let messageValue = messageElement.value.trim();

        if (emailValue.includes('@') && emailValue.includes('.')) {
            alert('Thanks for your message! - Phillip');
            emailElement.value = "";
            messageElement.value = "";
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Log key presses
    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Log mouse movement
    document.addEventListener("mousemove", (event) => {
        console.log(`Mouse at: ${event.clientX}, ${event.clientY}`);
    });

    // Log window resize
    window.addEventListener("resize", () => {
        console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}`);
    });

    // Scroll to the top on page load
    window.addEventListener("load", scrollToTop);

    // Log page visibility changes
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            console.log("Page hidden");
        } else {
            console.log("Page visible");
        }
    });

    // Animate elements on scroll
    document.addEventListener("scroll", () => {
        document.querySelectorAll(".fade-in").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
                el.style.transition = "all 0.5s ease-out";
            }
        });
    });

    // Dark Mode toggle button
    let toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Dark Mode";
    toggleBtn.style.cssText = "position:fixed;bottom:20px;left:20px;padding:10px;background:#000;color:#fff;border:none;border-radius:5px;cursor:pointer;";
    toggleBtn.onclick = () => document.body.classList.toggle("dark-mode");
    document.body.appendChild(toggleBtn);

    // Add dark-mode CSS
    const style = document.createElement("style");
    style.textContent = `
        body.dark-mode {
            background-color: #121212;
            color: #fff;
        }
        .dark-mode button {
            background-color: #fff;
            color: #000;
        }
    `;
    document.head.appendChild(style);
});
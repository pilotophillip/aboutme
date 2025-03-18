document.addEventListener("DOMContentLoaded", () => {
    // Function to update the current time
    const updateTime = () => {
        document.getElementById("current-time").textContent = new Date().toLocaleTimeString();
    };
    setInterval(updateTime, 1000);
    updateTime();

    // Smooth scroll to top
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // Create "Scroll to Top" button
    const topBtn = document.createElement("button");
    topBtn.textContent = "Top";
    topBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;background:#333;color:#fff;border:none;border-radius:5px;cursor:pointer;";
    topBtn.onclick = scrollToTop;
    document.body.appendChild(topBtn);

    // Dark Mode toggle button
    const toggleBtn = document.createElement("button");
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

    // Form validation
    const emailElement = document.getElementById("email");
    const messageElement = document.getElementById("message");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const emailValue = emailElement.value.trim();
        const messageValue = messageElement.value.trim();
        if (emailValue.includes("@") && emailValue.includes(".")) {
            alert("Thanks for your message! - Phillip");
            emailElement.value = "";
            messageElement.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Log events
    document.addEventListener("keydown", (event) => console.log(`Key pressed: ${event.key}`));
    document.addEventListener("mousemove", (event) => console.log(`Mouse at: ${event.clientX}, ${event.clientY}`));
    window.addEventListener("resize", () => console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}`));
    window.addEventListener("load", scrollToTop);
    document.addEventListener("visibilitychange", () => console.log(document.hidden ? "Page hidden" : "Page visible"));

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
});

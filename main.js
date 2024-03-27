// Dynamic Greeting
function updateGreeting() {
    const greeting = document.getElementById('dynamicGreeting');
    if (greeting) {
        const hour = new Date().getHours();
        let message;
        if (hour < 12) message = "Good morning!";
        else if (hour < 18) message = "Good afternoon!";
        else message = "Good evening!";
        greeting.textContent = message;
    }
}

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Interactive Background Color Change
function changeBackgroundColor() {
    const colors = ['#FFD700', '#FF6347', '#6A5ACD', '#20B2AA', '#FF69B4'];
    const body = document.body;
    const currentColor = body.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) { // Ensure new color is different
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    body.style.backgroundColor = newColor;
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    // If you have a button for changing background color:
    const bgColorBtn = document.getElementById('changeBgColorBtn');
    if (bgColorBtn) {
        bgColorBtn.addEventListener('click', changeBackgroundColor);
    }
});

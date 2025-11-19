const canvas = document.getElementById("bg");
const toggleInput = document.querySelector(".toggle-switch input");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const pixelSize = 4;

let savedState = localStorage.getItem("animationState");
let animationEnabled = savedState === null ? true : (savedState === "true");
toggleInput.checked = animationEnabled;

if (animationEnabled){
    canvas.style.display = "block";
    createParticles();
} 
else {
    canvas.style.display = "none";
    clearParticles();
}

toggleInput.addEventListener("change", () => {
    animationEnabled = toggleInput.checked;
    localStorage.setItem("animationState", animationEnabled);

    if (animationEnabled) {
        canvas.style.display = "block";
        createParticles();
    } 
    else {
        canvas.style.display = "none";
        clearParticles();
    }
});

function createParticles() {
    particles = [];
    for (let i = 0; i < 480; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6,
            size: Math.random() > 0.7 ? pixelSize * 2 : pixelSize,
            color: Math.random() > 0.5 ? "#c80000" : "#570000",
        });
    }
    animate();
}

function clearParticles() {
    particles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    if (!animationEnabled) return;

    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPageFile = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        const linkFile = link.getAttribute("href").replace("./", "");

        if (linkFile === currentPageFile) {
            link.classList.add("active");
        }
    });
});

// This // ...existing code...
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const revealSections = () => {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealSections);
    revealSections();
});
// ...existing code...

// Bubble animation
document.addEventListener("DOMContentLoaded", function () {
    // ...existing section animation code...

    // Bubble animation
    const canvas = document.getElementById('bubble-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let bubbles = [];
        const colors = ['#ff6a3d', '#1a2238', '#e0e0e0', '#f7f9fa'];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function createBubble() {
            return {
                x: Math.random() * canvas.width,
                y: canvas.height + 20,
                radius: 10 + Math.random() * 25,
                speed: 1 + Math.random() * 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 0.3 + Math.random() * 0.5
            };
        }

        function drawBubbles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bubbles.forEach(bubble => {
                ctx.globalAlpha = bubble.alpha;
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
                ctx.fillStyle = bubble.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            });
        }

        function updateBubbles() {
            bubbles.forEach(bubble => {
                bubble.y -= bubble.speed;
                if (bubble.y + bubble.radius < 0) {
                    // Reset bubble to bottom
                    Object.assign(bubble, createBubble());
                    bubble.y = canvas.height + bubble.radius;
                }
            });
        }

        function animate() {
            drawBubbles();
            updateBubbles();
            requestAnimationFrame(animate);
        }

        // Initialize bubbles
        bubbles = Array.from({length: 30}, createBubble);
        animate();
    }
});
// ...existing code...file is intentionally left blank.
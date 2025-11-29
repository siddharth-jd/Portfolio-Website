
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const filters = document.querySelectorAll(".filter-btn");
const boxes = document.querySelectorAll(".box");

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        boxes.forEach(box => {
            if (category === "all" || box.classList.contains(category)) {
                box.style.display = "flex";
            } else {
                box.style.display = "none";
            }
        });
    });
});


const toggleBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("visible");
});

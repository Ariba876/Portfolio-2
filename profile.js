// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==============================
// DARK / LIGHT MODE
// ==============================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#dc2626";

        return;

    }

    formMessage.textContent =
        "Message ready to send! Thanks, " + name + ".";

    formMessage.style.color = "#16a34a";

    contactForm.reset();

});


// ==============================
// SCROLL ANIMATION
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    observer.observe(section);

});


// ==============================
// ACTIVE NAVIGATION
// ==============================

window.addEventListener("scroll", function () {

    const currentPosition = window.scrollY + 150;

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            currentPosition >= sectionTop &&
            currentPosition < sectionTop + sectionHeight
        ) {

            const id = section.getAttribute("id");

            document
                .querySelectorAll(".nav-links a")
                .forEach(function (link) {

                    link.style.color = "";

                    if (
                        link.getAttribute("href") === "#" + id
                    ) {

                        link.style.color = "#2563eb";

                    }

                });

        }

    });

});
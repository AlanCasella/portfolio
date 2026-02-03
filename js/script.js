import { initI18n } from './i18n.js';

document.addEventListener("DOMContentLoaded", async () => {
    await initI18n();
    const carousel = document.getElementById("carrousel");
    const items = carousel.querySelectorAll(".carrousel-item");
    const dots = document.querySelectorAll(".dot");
    const cv = document.getElementById("resume-button");
    let isProgrammaticScroll = false;

    const menuButton = document.getElementById("menu-button");
    const menuDropdown = document.getElementById("menu-dropdown");

    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        menuDropdown.classList.toggle("hidden");
    });

    cv.addEventListener("click", () => {
        const lang = document.documentElement.lang;

        const file =
            lang === "es"
                ? "./assets/Alan-Casella-ES.pdf"
                : "./assets/Alan-Casella-EN.pdf";

        const link = document.createElement("a");
        link.href = file;
        link.download = "Alan-Casella-CV.pdf"; // fuerza descarga
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // click en item → scroll
    menuDropdown.addEventListener("click", (e) => {
        const item = e.target.closest(".menu-item");
        if (!item) return;

        const targetId = item.dataset.target;
        const section = document.getElementById(targetId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        menuDropdown.classList.add("hidden");
    });

    // click afuera → cerrar
    document.addEventListener("click", () => {
        menuDropdown.classList.add("hidden");
    });

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-primary", i === index);
            dot.classList.toggle("bg-slate-700", i !== index);
        });
    }

    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= items.length) index = 0;

        currentIndex = index;

        const slideWidth = items[0].offsetWidth;
        const gap = parseInt(getComputedStyle(carousel).gap) || 0;

        isProgrammaticScroll = true;

        carousel.scrollTo({
            left: currentIndex * (slideWidth + gap),
            behavior: "smooth",
        });

        updateDots(currentIndex);

        setTimeout(() => {
            isProgrammaticScroll = false;
        }, 300);
    }

    carousel.addEventListener("scroll", () => {
        if (isProgrammaticScroll) return;

        const slideWidth = items[0].offsetWidth;
        const gap = parseInt(getComputedStyle(carousel).gap) || 0;

        const index = Math.round(carousel.scrollLeft / (slideWidth + gap));

        if (index !== currentIndex) {
            currentIndex = index;
            updateDots(currentIndex);
        }
    });

    carousel.addEventListener("click", (e) => {
        const button = e.target.closest("button[data-action]");
        if (!button) return;
        e.preventDefault();
        const action = button.dataset.action;

        if (action === "prev") {
            goToSlide(currentIndex - 1);
        }

        if (action === "next") {
            goToSlide(currentIndex + 1);
        }
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = Number(dot.dataset.index);
            isProgrammaticScroll = true;
            goToSlide(index);

            updateDots(index);

            setTimeout(() => {
                isProgrammaticScroll = false;
            }, 300);
        });
    });
});



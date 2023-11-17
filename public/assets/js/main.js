document.addEventListener("DOMContentLoaded", () => {

    // Initialize Swiper for Hero Section
    var swiperHero = new Swiper(".swiper-hero", {
        centeredSlides: true,
        slidesPerView: 1,
        grabCursor: true,
        freeMode: false,
        loop: true,
        mousewheel: false,
        keyboard: {
            enabled: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false,
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 1.25,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    // Initialize Typeit for Hero Section
    new TypeIt("#title", {
        speed: 50,
        startDelay: 900,
        lifeLike: true,
        cursorSpeed: 1000,
        breakLines: false,
        waitUntilVisible: true
    })
        .type("Welcome to ")
        .type('<span style="color: #f00;">Ginza Sushi</span>', { delay: 300 })
        .type(", ")
        .break()
        .type("Your ")
        .type('<span style="font-weight: bold;">next level</span>', { delay: 300 })
        .type(" dining ")
        .type('<span style="font-style: italic;">experience</span>', { delay: 300 })
        .type(".")
        .pause(500)
        .delete(11)
        .type('<span style="text-decoration: underline;">adventure</span>.')
        .go();

    // Initialize Leaflet Map for Contact Section
    var map = L.map('mapcontact').setView([43.6532, -79.3832], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
    }).addTo(map);
    L.marker([43.6532, -79.3832]).addTo(map)
        .bindPopup("Ginza Sushi")
        .openPopup();

    // Initialize AOS for Main Contents
    AOS.init();

});

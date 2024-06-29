$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide');

    function showSlide(index) {
        slides.css('transform', `translateX(-${index * 100}%)`);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    $('.next').on('click', nextSlide);
    $('.prev').on('click', prevSlide);

    let autoSlide = setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos

    $('.carousel').on('mouseenter', function () {
        clearInterval(autoSlide);
    }).on('mouseleave', function () {
        autoSlide = setInterval(nextSlide, 3000);
    });
});
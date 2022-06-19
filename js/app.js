$(".aliados-slideshow").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
});

$(".cursos-slideshow").slick({
    slidesToScroll: 1,
    prevArrow: '.cursos-slideshow__arrow-left',
    nextArrow: '.cursos-slideshow__arrow-right',
});

sal();
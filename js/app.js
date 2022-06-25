$(".aliados-slideshow").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
        {
          breakpoint: 977,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
            breakpoint: 690,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
        },
        {
            breakpoint: 456,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
    ]
});

$(".cursos-slideshow").slick({
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1220,
          settings: {
            arrows: false,
            dots: true
          }
        }
    ]
});

sal();
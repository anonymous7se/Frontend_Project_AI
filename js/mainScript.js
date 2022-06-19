function myFunction() {
  var x = document.getElementById("navlink");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    800: {
      items: 3,
      nav: false,
    },
    1050: {
      items: 4,
      nav: true,
    },
    1350: {
      items: 5,
      nav: true,
    },
  },
});

$(".owl-carousel2").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    800: {
      items: 3,
      nav: false,
    },
    1050: {
      items: 4,
      nav: true,
    },
  },
});

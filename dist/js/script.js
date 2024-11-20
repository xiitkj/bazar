window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.add("hidden");
    }
});

const generateWa = (params) => {
    switch (params) {
      case "pentol":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20pentol%20nya";
        break;
      case "ayam":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20sate%20ayam%20nya";
        break;
      case "kol":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20sate%20kol%20nya";
        break;
      case "lumpia":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20lumpia%20nya";
        break;
      case "risol":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20risol%20nya";
        break;
      case "dimsum":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20dimsum%20nya";
        break;
      case "es":
        location.href =
          "https://wa.me/+6281335333867?text=bang%20saya%20pesan%20es%20kopi%20coklat%20nya";
        break;
    }
  };
  

  AOS.init({
    once: true,
});

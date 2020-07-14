const nav = document.querySelector("nav");
const myHome = document.querySelector(".myhome");

const myHomeOptions = {
  rootMargin: "-500px 0px 0px 0px",
};

const myHomeObserver = new IntersectionObserver(function (
  entries,
  myHomeObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
myHomeOptions);

myHomeObserver.observe(myHome);

// add class activ to nav
let navbarNav = document.querySelector(".navbar-nav");
let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navbarNav.querySelector(".active").classList.remove("active");

    navItem.classList.add("active");
  });
});

// add typing effect
function typingsucc(){
  const texts = ["SUCCESS" , "DREAM"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;

  }
  setTimeout(type, 800);
})();
}
typingsucc()
// scroll up and down
const scrollDown = document.querySelector(".scroll__down");

scrollDown.addEventListener("click", () => {
  window.scroll({
    top: 650,
    behavior: "smooth",
  });
});

const scrollUp = document.querySelector(".scroll__up");

scrollUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 60,
  autoplay: true,

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

let Imagess = document.querySelector(".imagess");
let mixer = mixitup(Imagess);

// add class activ to buttons of projects
let myUl = document.querySelector("#projects ul");
let myLis = document.querySelectorAll("#projects ul li");

myLis.forEach((myLi) => {
  myLi.addEventListener("click", () => {
    myUl.querySelector(".active").classList.remove("active");

    myLi.classList.add("active");
  });
});

//  MAKE a counter
let ourData = document.querySelectorAll(".data");
let speed = 1000;

ourData.forEach((data) => {
  const updateData = () => {
    const target = +data.getAttribute("data-count");
    const count = +data.innerText;
    const inc = target / speed;

    if (count < target) {
      data.innerText = Math.ceil(count + inc);
      setTimeout(updateData, 1);
    } else {
      data.innerText = target;
    }
    //  console.log(inc)
  };

  updateData();
});

// $('body').scrollspy({ target: '#navbarNav' })

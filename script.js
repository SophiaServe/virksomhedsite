document.querySelector(".float-nav").addEventListener("click", function () {
  document.querySelector(".main-nav").classList.toggle("active");
  document.querySelector(".menu-btn").classList.toggle("active");
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = currentDateTime.getMonth() + 1;
var date = currentDateTime.getDate() + 1;

if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
  checkoutElem.setAttribute("min", this.value);
};

const cards = document.querySelectorAll(".card");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function isCardVisible() {
  cards.forEach((card) => {
    isElementInViewport(card) ? card.classList.add("isVisible") : card.classList.remove("isVisible");
  });
}

document.addEventListener("DOMContentLoaded", isCardVisible);
window.addEventListener("scroll", isCardVisible);
window.addEventListener("resize", isCardVisible);

// document.querySelector('.float-nav').addEventListener('click', function () {
//   document.querySelector('.main-nav').classList.toggle('active')
//   document.querySelector('.menu-btn').classList.toggle('active')
// })

// // Get the button:
// let mybutton = document.getElementById('myBtn')

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction()
// }

// function scrollFunction () {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = 'block'
//   } else {
//     mybutton.style.display = 'none'
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction () {
//   document.body.scrollTop = 0 // For Safari
//   document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
// }

// var currentDateTime = new Date()
// var year = currentDateTime.getFullYear()
// var month = currentDateTime.getMonth() + 1
// var date = currentDateTime.getDate() + 1

// if (date < 10) {
//   date = '0' + date
// }
// if (month < 10) {
//   month = '0' + month
// }

// var dateTomorrow = year + '-' + month + '-' + date
// var checkinElem = document.querySelector('#checkin-date')
// var checkoutElem = document.querySelector('#checkout-date')

// checkinElem.setAttribute('min', dateTomorrow)

// checkinElem.onchange = function () {
//   checkoutElem.setAttribute('min', this.value)
// }

// const cards = document.querySelectorAll('.card')

// function isElementInViewport (el) {
//   const rect = el.getBoundingClientRect()
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   )
// }

// function isCardVisible () {
//   cards.forEach(card => {
//     isElementInViewport(card)
//       ? card.classList.add('isVisible')
//       : card.classList.remove('isVisible')
//   })
// }

// document.addEventListener('DOMContentLoaded', isCardVisible)
// window.addEventListener('scroll', isCardVisible)
// window.addEventListener('resize', isCardVisible)

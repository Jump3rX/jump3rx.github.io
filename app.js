"use strict";
// const showNav = document.querySelector(".show-nav");
// const navLinks = document.querySelector(".nav-links");
// showNav.addEventListener("click", function () {
//   navLinks.classList.toggle("show-links");
//   //   navLinks.style.display = "block";
//   console.log("clicked");
// });
document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode == 123) {
    e.stopPropagation();
    e.preventDefault();
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// (function () {
//   // https://dashboard.emailjs.com/admin/account
//   emailjs.init("Tpso-eG5bK5eteDOK");
// })();

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     // generate a five digit number for the contact_number variable
//     this.contact_number.value = (Math.random() * 100000) | 0;
//     // these IDs from the previous steps
//     emailjs.sendForm("contact_service", "contact_form", this).then(
//       function () {
//         alert("SUCCESS!");
//       },
//       function (error) {
//         alert("FAILED...", error);
//       }
//     );
//   });

function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "conradmax5@gmail.com",
    Password: "D603C2764DA5BC17C4F82AC57B5889DB3389",
    To: "njoraconrad@gmail.com ",
    From: document.querySelector("#email").value,
    Subject: document.querySelector("#subject").value,
    Body: document.querySelector("#message").value,
  }).then((message) => alert(message));
}

// document.addEventListener("DOMContentLoaded", function () {
//     "use strict";

//     /*[ Load page ]*/
//     const animsitionElements = document.querySelectorAll(".animsition");
//     animsitionElements.forEach(el => {
//         el.classList.add("fade-in");
//         setTimeout(() => el.classList.remove("fade-in"), 1500);
//     });

//     /*[ Back to top ]*/
//     const myBtn = document.getElementById("myBtn");
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > window.innerHeight / 2) {
//             myBtn.style.display = "flex";
//         } else {
//             myBtn.style.display = "none";
//         }
//     });

//     // myBtn.addEventListener("click", function () {
//     //     window.scrollTo({ top: 0, behavior: "smooth" });
//     // });

//     /*[ Fixed Header ]*/
//     const headerDesktop = document.querySelector(".container-menu-desktop");
//     const wrapMenu = document.querySelector(".wrap-menu-desktop");
//     const topBar = document.querySelector(".top-bar");
//     let posWrapHeader = topBar ? topBar.offsetHeight : 0;

//     function handleHeaderScroll() {
//         if (window.scrollY > posWrapHeader) {
//             headerDesktop.classList.add("fix-menu-desktop");
//             wrapMenu.style.top = "0";
//         } else {
//             headerDesktop.classList.remove("fix-menu-desktop");
//             wrapMenu.style.top = `${posWrapHeader - window.scrollY}px`;
//         }
//     }

//     window.addEventListener("scroll", handleHeaderScroll);

//     /*[ Menu mobile ]*/
//     document.querySelector(".btn-show-menu-mobile").addEventListener("click", function () {
//         this.classList.toggle("is-active");
//         document.querySelector(".menu-mobile").classList.toggle("show");
//     });

//     document.querySelectorAll(".arrow-main-menu-m").forEach(arrow => {
//         arrow.addEventListener("click", function () {
//             this.parentElement.querySelector(".sub-menu-m").classList.toggle("show");
//             this.classList.toggle("turn-arrow-main-menu-m");
//         });
//     });

//     /*[ Show / hide modal search ]*/
//     document.querySelector(".js-show-modal-search").addEventListener("click", function () {
//         document.querySelector(".modal-search-header").classList.add("show-modal-search");
//         this.style.opacity = "0";
//     });

//     document.querySelector(".js-hide-modal-search").addEventListener("click", function () {
//         document.querySelector(".modal-search-header").classList.remove("show-modal-search");
//         document.querySelector(".js-show-modal-search").style.opacity = "1";
//     });

//     /*[ Filter / Search product ]*/
//     document.querySelector(".js-show-filter").addEventListener("click", function () {
//         this.classList.toggle("show-filter");
//         document.querySelector(".panel-filter").classList.toggle("show");
//     });

//     document.querySelector(".js-show-search").addEventListener("click", function () {
//         this.classList.toggle("show-search");
//         document.querySelector(".panel-search").classList.toggle("show");
//     });

//     /*[ Cart ]*/
//     document.querySelector(".js-show-cart").addEventListener("click", function () {
//         document.querySelector(".js-panel-cart").classList.add("show-header-cart");
//     });

//     document.querySelector(".js-hide-cart").addEventListener("click", function () {
//         document.querySelector(".js-panel-cart").classList.remove("show-header-cart");
//     });

//     /*[ +/- num product ]*/
//     document.querySelectorAll(".btn-num-product-down").forEach(btn => {
//         btn.addEventListener("click", function () {
//             let input = this.nextElementSibling;
//             let numProduct = Number(input.value);
//             if (numProduct > 0) input.value = numProduct - 1;
//         });
//     });

//     document.querySelectorAll(".btn-num-product-up").forEach(btn => {
//         btn.addEventListener("click", function () {
//             let input = this.previousElementSibling;
//             input.value = Number(input.value) + 1;
//         });
//     });

//     // /*[ Show modal1 ]*/
//     // document.querySelector(".js-show-modal1").addEventListener("click", function (e) {
//     //     e.preventDefault();
//     //     document.querySelector(".js-modal1").classList.add("show-modal1");
//     // });

//     // document.querySelector(".js-hide-modal1").addEventListener("click", function () {
//     //     document.querySelector(".js-modal1").classList.remove("show-modal1");
//     // });
// });

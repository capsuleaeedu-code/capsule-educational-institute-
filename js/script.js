/* =========================================
   CAPSULE EDUCATIONAL INSTITUTE
   Main JavaScript File
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Update the copyright year automatically
    const copyrightElements = document.querySelectorAll(".copyright-year");

    copyrightElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // Add a mobile navigation toggle if a menu button exists
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {
            const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!isExpanded));
            navLinks.classList.toggle("nav-open");
        });

        // Close the mobile menu after a navigation link is selected
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("nav-open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    // Smoothly scroll to in-page links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});

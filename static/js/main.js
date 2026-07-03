/* ============================================================
   CDE ENGINEERING SERVICES — SHARED SCRIPT
   Behaviours shared across every page:
     • Scroll-reveal (IntersectionObserver, .reveal -> .in)
     • Nav shadow on scroll
     • Mobile hamburger menu
     • Floating WhatsApp button (fade-in after 3s)
   Page-specific scripts (marquee, testimonials, form, etc.)
   live inline on the individual pages.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Nav shadow on scroll ---- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile menu toggle ---- */
  var hamburger  = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Floating WhatsApp button (auto-injected, fade-in after 3s) ---- */
  if (!document.querySelector(".wa-float")) {
    var wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = "https://wa.me/971558933066";
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat with CDE on WhatsApp");
    wa.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.7.7-.9 1.7-.4 2.9a8.3 8.3 0 0 0 3.9 4c1.5.7 2.3.6 2.9.5.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1z"/>' +
      '</svg>';
    document.body.appendChild(wa);
    window.setTimeout(function () { wa.classList.add("show"); }, 3000);
  }

})();

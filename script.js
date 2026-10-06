const root = document.documentElement;

const backToTop = document.querySelector(".back-to-top");
const contactForm = document.querySelector(".contact-form");
let contactFormStarted = false;

const updateBackToTop = () => {
  backToTop?.classList.toggle("is-visible", window.scrollY > 720);
};

updateBackToTop();
window.addEventListener("scroll", updateBackToTop, { passive: true });

contactForm?.addEventListener("focusin", () => {
  if (contactFormStarted || typeof window.gtag !== "function") return;
  contactFormStarted = true;
  window.gtag("event", "form_start", { form_name: "contact" });
});

contactForm?.addEventListener("submit", () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "form_submit", { form_name: "contact" });
  }
});

window.addEventListener("pointermove", (event) => {
  const x = `${event.clientX}px`;
  const y = `${event.clientY}px`;
  root.style.setProperty("--mx", x);
  root.style.setProperty("--my", y);
});

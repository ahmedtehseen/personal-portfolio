document.documentElement.classList.add("js");

const contactForm = document.querySelector(".contact-form");
let contactFormStarted = false;
contactForm?.addEventListener("focusin", () => {
  if (contactFormStarted || typeof window.gtag !== "function") return;
  contactFormStarted = true;
  window.gtag("event", "form_start", { form_name: "contact" });
});
contactForm?.addEventListener("submit", () => {
  if (typeof window.gtag === "function")
    window.gtag("event", "form_submit", { form_name: "contact" });
});
if (document.body.classList.contains("case-study-page")) {
  document
    .querySelectorAll(
      ".case-section-heading, .case-split > *, .case-card, .case-tech-card, .case-gallery figure, .case-outcome > *",
    )
    .forEach((element) => element.setAttribute("data-reveal", ""));
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
);
document
  .querySelectorAll("[data-reveal]")
  .forEach((element) => revealObserver.observe(element));

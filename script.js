document.documentElement.classList.add("js");

const contactForm = document.querySelector(".contact-form");
let contactFormStarted = false;
contactForm?.addEventListener("focusin", () => {
  if (contactFormStarted || typeof window.gtag !== "function") return;
  contactFormStarted = true;
  window.gtag("event", "form_start", { form_name: "contact" });
});
contactForm?.addEventListener("submit", () => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "form_submit", {
    form_name: "contact",
    inquiry_type: contactForm.elements.intent?.value || "unknown",
  });
});

function ctaType(link) {
  const href = link.getAttribute("href") || "";
  if (href.includes("cal.com")) return "book_call";
  if (href.startsWith("mailto:")) return "email";
  if (href.endsWith(".pdf")) return "resume_download";
  if (href.includes("linkedin.com")) return "linkedin";
  if (href.includes("github.com")) return "github";
  if (href.includes("/work/")) return "case_study";
  if (href.includes("streamwise")) return "streamwise";
  return null;
}

document.addEventListener("click", (event) => {
  const link = event.target.closest?.("a[href]");
  if (!link || typeof window.gtag !== "function") return;
  const type = ctaType(link);
  if (!type) return;
  const section = link.closest("section[id], header, footer, aside");
  window.gtag("event", "cta_click", {
    cta_type: type,
    cta_text: link.textContent.trim().slice(0, 60),
    cta_location: section?.id || section?.tagName.toLowerCase() || "page",
    page_path: location.pathname,
  });
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

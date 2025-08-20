// Theme toggle with persistence
(function initTheme() {
  const stored = localStorage.getItem("theme") || "dark";
  if (stored === "light") document.body.classList.remove("theme-dark");
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    const mode = document.body.classList.contains("theme-dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });
})();

// Mobile drawer
const drawer = document.getElementById("drawer");
const burger = document.getElementById("mobileMenu");
function closeDrawer(){ drawer?.classList.remove("open"); }
burger?.addEventListener("click", () => drawer.classList.toggle("open"));

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Lightbox for gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.querySelectorAll(".lightbox").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
window.closeLightbox = closeLightbox;

// Contact form UX (works with Formspree or mailto fallback)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
form?.addEventListener("submit", async (e) => {
  if (!form.action || form.action.startsWith("mailto:")) return; // let browser handle mailto
  e.preventDefault();
  statusEl.textContent = "Sending…";
  try {
    const data = new FormData(form);
    const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (res.ok) {
      statusEl.textContent = "Thanks! I’ll get back to you shortly.";
      form.reset();
    } else {
      statusEl.textContent = "Something went wrong. You can email me directly.";
    }
  } catch {
    statusEl.textContent = "Network error. Please try again later.";
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


const icon = (paths) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const features = [
  {t:"AI Resume Builder", d:"Create a professional, ATS-friendly resume with intelligent suggestions.", l:"Build Your Resume →",
   i: icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/>')},
  {t:"Internship Finder", d:"Discover internship opportunities based on your skills and interests.", l:"Find Opportunities →",
   i: icon('<path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M8 7V5h8v2"/>')},
  {t:"Skill Roadmaps", d:"Follow structured learning paths to build skills for your target career.", l:"Explore Roadmaps →",
   i: icon('<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>')},
  {t:"Interview Preparation", d:"Practice common interview questions and improve your confidence.", l:"Practice Interviews →",
   i: icon('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/>')},
  {t:"Career Guidance", d:"Understand different career paths and discover what could be right for you.", l:"Explore Careers →",
   i: icon('<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>')},
  {t:"Progress Dashboard", d:"Track your skills, applications, learning goals, and career progress.", l:"View Progress →",
   i: icon('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>')},
];

const paths = [
  {t:"Software Development", s:"Java • JavaScript • React • Backend", c:"#4F46E5"},
  {t:"Data & AI", s:"Python • Data Analysis • Machine Learning", c:"#7C3AED"},
  {t:"Cloud & DevOps", s:"AWS • Docker • Linux • CI/CD", c:"#06B6D4"},
  {t:"Cybersecurity", s:"Networking • Linux • Security • Ethical Hacking", c:"#111827"},
  {t:"UI/UX Design", s:"Figma • Design Systems • Prototyping", c:"#4F46E5"},
  {t:"Business & Marketing", s:"Marketing • Analytics • Communication", c:"#7C3AED"},
];

const testimonials = [
  {q:"CareerLaunch helped me understand what skills I should focus on before applying for internships.", n:"Aarav Mehta", r:"Computer Science Student"},
  {q:"The resume improvement suggestions made it much easier to explain my projects professionally.", n:"Priya Sharma", r:"Engineering Student"},
  {q:"I finally had a structured roadmap instead of randomly learning technologies.", n:"Rahul Verma", r:"Final-Year Student"},
];

const resources = [
  {cat:"Career Guide", t:"Resume Guide", d:"Learn how to create a strong fresher resume."},
  {cat:"Internships", t:"Internship Preparation", d:"Everything students should know before applying."},
  {cat:"Interview Prep", t:"Interview Essentials", d:"Prepare for technical and HR interviews."},
];

const initials = n => n.split(" ").map(w=>w[0]).join("");

document.getElementById("features-grid").innerHTML = features.map(f => `
  <div class="feature-card reveal">
    <div class="feature-icon">${f.i}</div>
    <h3>${f.t}</h3>
    <p>${f.d}</p>
    <a href="#contact" class="feature-link">${f.l}</a>
  </div>`).join("");

document.getElementById("paths-grid").innerHTML = paths.map(p => `
  <div class="path-card reveal">
    <div class="path-icon" style="background:${p.c};">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 11-13h-7l1-7z"/></svg>
    </div>
    <h3>${p.t}</h3>
    <p class="skills">${p.s}</p>
    <a href="#contact" class="path-link">Explore Path →</a>
  </div>`).join("");

document.getElementById("testi-grid").innerHTML = testimonials.map(t => `
  <div class="testi-card reveal">
    <p>"${t.q}"</p>
    <div class="testi-person">
      <span class="avatar">${initials(t.n)}</span>
      <div><div class="testi-name">${t.n}</div><div class="testi-role">${t.r}</div></div>
    </div>
  </div>`).join("");

document.getElementById("resources-grid").innerHTML = resources.map(r => `
  <div class="resource-card reveal">
    <div class="resource-top"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
    <div class="resource-body">
      <div class="resource-cat">${r.cat}</div>
      <h3>${r.t}</h3>
      <p>${r.d}</p>
      <a href="#contact" class="path-link">Read More →</a>
    </div>
  </div>`).join("");

/* ---------- navbar scroll ---------- */
const header = document.getElementById("site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
}, {passive:true});

/* ---------- mobile menu ---------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", open ? "true" : "false");
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}));

/* ---------- reveal on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
}, {threshold:0.15});
revealEls.forEach(el => revealObserver.observe(el));

/* ---------- animated stat counters ---------- */
const statEls = document.querySelectorAll(".stat-num");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      el.textContent = val.toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, {threshold:0.4});
statEls.forEach(el => statObserver.observe(el));

/* ---------- hero dashboard fill animation ---------- */
const mockFill = document.getElementById("mockFill1");
const mockObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      mockFill.style.width = mockFill.dataset.target + "%";
      mockObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.3});
mockObserver.observe(mockFill);

/* ---------- contact form ---------- */
const form = document.getElementById("contact-form");
const successBox = document.getElementById("form-success");

function validateField(id, input, test){
  const field = document.getElementById(id);
  const valid = test(input.value.trim());
  field.classList.toggle("error", !valid);
  return valid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("c-name");
  const email = document.getElementById("c-email");
  const subject = document.getElementById("c-subject");
  const message = document.getElementById("c-message");

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validName = validateField("field-name", name, v => v.length > 0);
  const validEmail = validateField("field-email", email, v => emailRe.test(v));
  const validSubject = validateField("field-subject", subject, v => v.length > 0);
  const validMessage = validateField("field-message", message, v => v.length > 0);

  if (validName && validEmail && validSubject && validMessage) {
    form.classList.add("hidden");
    successBox.classList.add("show");
  } else {
    const firstError = form.querySelector(".field.error input, .field.error textarea");
    if (firstError) firstError.focus();
  }
});

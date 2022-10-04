const menuLinks = document.querySelectorAll(".nav__link[data-goto]");
const sections = document.querySelectorAll(".section");

const cb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      menuLinks.forEach((link) => link.classList.remove("nav__link-active"));

      const BlockId = entry.target.id;
      const activeLink = document.querySelector(
        `.nav__link[data-goto=".${BlockId}"]`
      );
      if (activeLink) {
        activeLink.classList.add("nav__link-active");
      }
    }
  });
};

const sectionObserver = new IntersectionObserver(cb, {
  threshold: [0.8],
});

sections.forEach((s) => sectionObserver.observe(s));

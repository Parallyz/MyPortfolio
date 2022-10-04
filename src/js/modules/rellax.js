const sr = ScrollReveal({
  duration: 1000,
  reset: false,
  mobile: false,
});

sr.reveal(".js-rellax-title", {
  delay: 0,
  origin: "bottom",
  distance: "170px",
  viewFactor: 0,
});
sr.reveal(".js-rellax-subtitle", {
  delay: 0,
  origin: "bottom",
  distance: "170px",
  viewFactor: 0,
  delay: 250,
});
sr.reveal(".js-rellax-img", {
  delay: 0,
  interval: 150,
  viewFactor: 0,
  scale: 0.8,
});
sr.reveal(".js-rellax-social", {
  delay: 250,
  viewFactor: 0,
  interval: 250,
  scale: 0.5,
});
sr.reveal(".js-rellax-skills", {
  delay: 0,

  viewFactor: 0,
  interval: 150,

  rotate: {
    x: 0,
    y: 180,
  },
});
sr.reveal(".js-rellax-btn", {
  delay: 0,
  scale: 0.8,

  viewFactor: 0,
});

sr.reveal(".js-rellax-swiper", {
  delay: 0,
  origin: "left",
  distance: "270px",
  viewFactor: 0,
});

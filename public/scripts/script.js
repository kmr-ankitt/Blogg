gsap.registerPlugin(ScrollTrigger);

gsap.to("#second-page h2", {
  x: "-80%", 
  scrollTrigger: {
    trigger: "#second-page", 
    start: "top top", 
    end: "bottom top", 
    scrub: 2,
    pin: true,
  }
});
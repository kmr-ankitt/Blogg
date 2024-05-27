gsap.registerPlugin(ScrollTrigger);

gsap.to("#second-page h2", {
  x: "-80%", 
  scrollTrigger: {
    trigger: "#second-page", 
    start: "top 50%", 
    end: "bottom 50%", 
    scrub: 2,
    pin: true,
  }
});

gsap.from("#navbar , .about-con", {
  y: "-10%",
  opacity: 0,
  duration: 2,
  // delay: 1
})

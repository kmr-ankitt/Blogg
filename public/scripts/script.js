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

gsap.from("#navbar , .about-con", {
  y: "-10%",
  opacity: 0,
  duration: 2,
  // delay: 1
})

gsap.from(".third-page-container .view-title h2 , .third-page-container h3 ", {
  x: -500,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
      trigger:"#third-page",
      scroller: "body",
  }
})
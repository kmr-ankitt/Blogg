gsap.registerPlugin(ScrollTrigger);

gsap.to("#second-page h2", {
  x: "-70%", 
  scrollTrigger: {
    trigger: "#second-page", 
    start: "top 50%", 
    end: "bottom 50%", 
    scrub: 2,
    pin: true,
  }
});

gsap.from("#navbar , .about-con ,form" , {
  y: "-10%",
  opacity: 0,
  duration: 2,
  delay: .5
})

gsap.from("#main h1", {
  opacity: 0,
  duration : 2,
  delay: .5
})
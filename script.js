const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();



tl.to("#page1", {
    y: "100vh",
    scale: 0.4,
    duration: 0,
})
tl.to("#page1", {
    y: "0vh",
    scale: 0.5,
    duration: 1,
    delay: 1,
})
tl.to("#page1", {
    y: 0,
    rotate: -360,
    duration: .5,
    scale: 1,
    onComplete: function() {
        window.scrollTo(0, 0); // Scroll to the top of the page after animation completion
    }

})
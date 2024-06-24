window.onload = function() {
    gsap.from("#header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".start", { duration: 1, scale: 0.5, opacity: 0, delay: 1, ease: "elastic" });
    gsap.from("#start-button", { duration: 1, rotation: 360, opacity: 0, delay: 1.5, ease: "power2.out" });
}

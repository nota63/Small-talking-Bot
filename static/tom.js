window.onload = function() {
    gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("h4", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from(".speech", { duration: 1, scale: 0.5, opacity: 0, delay: 1, ease: "elastic" });
    gsap.from(".script-input", { duration: 1, x: -200, opacity: 0, delay: 1.5, ease: "power2.out" });
    gsap.from("button", { duration: 1, y: 100, opacity: 0, delay: 2, ease: "bounce" });
    gsap.from(".action-input", { duration: 1, x: 200, opacity: 0, delay: 2.5, ease: "power2.out" });
}

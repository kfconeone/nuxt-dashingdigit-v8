import gsap from "gsap";

export default {
  openMenu: () => {
    gsap.set(".menu", { transform: "translate(0%, -100%)" });
    gsap.to(".menu", {
      ease: "Power3.easeInOut",
      duration: 0.4,
      transform: "translate(0%, 0%)",
    });
  },
  closeMenu: () => {
    gsap.to(".menu", {
      ease: "Power3.easeInOut",
      transform: "translate(0%, 100%)",
      duration: 0.4,
      onComplete: () => gsap.set(".menu", { transform: "translate(0%, -100%)" }),
    });
  },
  nextRoute: () => {
    gsap.to(".menu", {
      ease: "Power3.easeInOut",
      transform: "translate(0%, -100%)",
      duration: 0.4,
      onComplete: () => gsap.set(".menu", { transform: "translate(0%, -100%)" }),
    });
  },
};

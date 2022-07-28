import gsap from "gsap";

export default {
  openMenu: () => {
    gsap.set(".menu", { transform: "translate(0%, -100%)" });
    gsap.to(".menu", {
      ease: "power4.easeIn",
      duration: 0.5,
      transform: "translate(0%, 0%)",
    });
  },
  closeMenu: () => {
    gsap.to(".menu", {
      ease: "power4.easeOut",
      transform: "translate(0%, 100%)",
      duration: 0.5,
      onComplete: () => gsap.set(".menu", { transform: "translate(0%, -100%)" }),
    });
  },
};
